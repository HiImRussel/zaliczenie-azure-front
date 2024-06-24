/** React */
import { useMemo } from "react";

/** Components */
import AddTask from "../../components/molecules/AddTask/AddTask";
import TasksList from "../../components/molecules/TasksList/TasksList";

/** Services */
import TaskServiceInstance from "../../services/tasks.service";

/** Styles */
import styles from "./styles.module.scss";

/** Hooks */
import useResource from "../../hooks/useResource";
import useObservable from "../../hooks/useObservable";

/** Store */
import { reloadTasksToken$ } from "../../rxjsStore/tasks.rxjs-store";

/** Types */
import { Task } from "../../types/task.types";

type GetAllUserTasksResponse = {
    status: string;
    tasks: Task[];
};

const HomeView = () => {
    const reloadTasksToken = useObservable(reloadTasksToken$);
    const { data, isLoading } = useResource<GetAllUserTasksResponse>(
        TaskServiceInstance.getAllUserTasks,
        { status: "", tasks: [] },
        [],
        [reloadTasksToken]
    );

    const completedTasks = useMemo(
        () => data.tasks.filter((task) => task.completed),
        [data]
    );
    const notCompletedTasks = useMemo(
        () => data.tasks.filter((task) => !task.completed),
        [data]
    );

    return (
        <>
            <AddTask />
            <div className={styles["home-view__tasks"]}>
                <TasksList
                    tasks={notCompletedTasks}
                    title="New tasks"
                    loading={isLoading}
                />
                <TasksList
                    tasks={completedTasks}
                    title="Completed tasks"
                    loading={isLoading}
                />
            </div>
        </>
    );
};

export default HomeView;
