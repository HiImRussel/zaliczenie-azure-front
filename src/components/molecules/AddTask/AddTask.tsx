/** React */
import { useState } from "react";

/** Components */
import Input from "../../atoms/Input/Input";
import TextArea from "../../atoms/TextArea/TextArea";
import Button from "../../atoms/Button/Button";

/** Services */
import TaskServiceInstance from "../../../services/tasks.service";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** Store */
import { reloadTasksToken$ } from "../../../rxjsStore/tasks.rxjs-store";
import { pushAlert } from "../../../rxjsStore/alerts.rxjs-store";

/** UUID */
import { v4 as uuidv4 } from "uuid";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { ApiError } from "../../../types/error.types";

const AddTask = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [errors, setErrors] = useState<ApiError[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeTitle = (title: string) => setTaskTitle(title);
    const handleChangeDescription = (description: string) =>
        setTaskDescription(description);
    const handleAddTask = () => {
        requestParser({
            promise: TaskServiceInstance.addTask({
                title: taskTitle,
                description: taskDescription,
            }),
            onSuccess: () => {
                reloadTasksToken$.next(uuidv4());
                pushAlert("Task added successfully", "success");
                setTaskTitle("");
                setTaskDescription("");
            },
            onError: setErrors,
            setIsLoading,
        });
    };

    return (
        <div className={styles["add-task"]}>
            <Input
                inputProps={{
                    placeholder: "Title",
                    value: taskTitle,
                }}
                onChange={handleChangeTitle}
                boxStyle={{ marginBottom: "10px", width: "100%" }}
                errors={errors}
                fieldName="title"
            />
            <TextArea
                value={taskDescription}
                placeholder="Description"
                onChange={handleChangeDescription}
                wrapperStyles={{ marginBottom: "10px", width: "100%" }}
                errors={errors}
                fieldName="description"
            />

            <Button
                buttonProps={{ onClick: handleAddTask }}
                isLoading={isLoading}
            >
                Add
            </Button>
        </div>
    );
};

export default AddTask;
