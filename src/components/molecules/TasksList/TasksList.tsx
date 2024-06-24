/** Classnames */
import classNames from "classnames";

/** Components */
import Task from "../Task/Task";
import LoadingSpinner from "../../atoms/LoadingSpinner/LoadingSpinner";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { Task as TaskType } from "../../../types/task.types";

type TasksListProps = {
    tasks: TaskType[];
    title: string;
    loading?: boolean;
};

const TasksList = (props: TasksListProps) => {
    const { tasks, title, loading } = props;

    return (
        <div
            className={classNames(
                styles["tasks-list"],
                styles["tasks-list--first"]
            )}
        >
            {loading && <LoadingSpinner />}
            <h2 className={styles["tasks-list__title"]}>{title}</h2>
            <div>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TasksList;
