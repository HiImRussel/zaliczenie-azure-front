/** React */
import { useState } from "react";
/** Components */
import Button from "../../atoms/Button/Button";

/** Styles */
import styles from "./styles.module.scss";

/** Icons */
import { ReactComponent as CompleteIcon } from "../../../assets/icons/minus-circle.svg";
import { ReactComponent as RemoveIcon } from "../../../assets/icons/trash.svg";

/** Services */
import TaskServiceInstance from "../../../services/tasks.service";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** Store */
import { reloadTasksToken$ } from "../../../rxjsStore/tasks.rxjs-store";

/** UUID */
import { v4 as uuidv4 } from "uuid";

/** Types */
import type { Task as TaskTypes } from "../../../types/task.types";

type TaskProps = {
    task: TaskTypes;
};

const Task = (props: TaskProps) => {
    const { task } = props;

    const [isLoading, setIsLoading] = useState(false);

    const handleCompleteTask = () =>
        requestParser({
            promise: TaskServiceInstance.updateTask({
                ...task,
                completed: true,
            }),
            onSuccess: () => reloadTasksToken$.next(uuidv4()),
            setIsLoading,
        });

    const handleRemoveTask = () =>
        requestParser({
            promise: TaskServiceInstance.deleteTask(task.id),
            onSuccess: () => reloadTasksToken$.next(uuidv4()),
            setIsLoading,
        });

    return (
        <div className={styles["task"]}>
            <div className={styles["task__description-section"]}>
                <h4 className={styles["task__title"]}>{task.title}</h4>
                <p className={styles["task__description"]}>
                    {task.description}
                </p>
            </div>

            <div className={styles["task__buttons"]}>
                {!task.completed && (
                    <Button
                        buttonProps={{
                            style: { marginRight: "16px" },
                            onClick: handleCompleteTask,
                        }}
                        isLoading={isLoading}
                    >
                        <CompleteIcon
                            width={"16px"}
                            height={"16px"}
                            fill="white"
                        />
                    </Button>
                )}
                <Button
                    isLoading={isLoading}
                    buttonProps={{ onClick: handleRemoveTask }}
                >
                    <RemoveIcon width={"16px"} height={"16px"} fill="white" />
                </Button>
            </div>
        </div>
    );
};
export default Task;
