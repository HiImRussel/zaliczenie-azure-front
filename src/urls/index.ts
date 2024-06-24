const API_ENDPOINTS = {
    auth: {
        login: "/auth/login",
        refreshToken: "/auth/refreshToken",
        register: "/auth/register",
    },
    tasks: {
        getAllUserTasks: "/tasks/all",
        createTask: "/tasks/add",
        updateTask: "/tasks/update",
        deleteTask: "/tasks/delete",
    },
};

export default API_ENDPOINTS;
