/** Services */
import ApiService from "./api.service";

/** Constants */
import API_ENDPOINTS from "../urls";

/** Types */
import { Task } from "../types/task.types";

class TasksService extends ApiService {
    public getAllUserTasks = () =>
        this.get(API_ENDPOINTS.tasks.getAllUserTasks);

    public addTask = (data: { title: string; description: string }) =>
        this.post(API_ENDPOINTS.tasks.createTask, data);

    public updateTask = (data: Task) =>
        this.patch(API_ENDPOINTS.tasks.updateTask, data);

    public deleteTask = (id: string) =>
        this.delete(`${API_ENDPOINTS.tasks.deleteTask}/${id}`);
}

const TaskServiceInstance = new TasksService();

export default TaskServiceInstance;
