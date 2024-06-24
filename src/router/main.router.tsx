/** React router */
import { createBrowserRouter } from "react-router-dom";

/** Constants */
import { APP_URLS } from "../constants/app";

/** Pages */
import RequireAuth from "../components/core/RequireAuth/RequireAuth";
import MainPage from "../pages/main/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/Register/Register";
import HomeView from "../pages/HomeView/HomeView";

/** Components */
import NotAuthOnly from "../components/core/NotAuthOnly/NotAuthOnly";

const router = createBrowserRouter([
    { path: "*", element: <div>404</div> },
    {
        path: APP_URLS.LOGIN,
        element: (
            <NotAuthOnly>
                <LoginPage />
            </NotAuthOnly>
        ),
    },
    {
        path: APP_URLS.REGISTER,
        element: (
            <NotAuthOnly>
                <RegisterPage />
            </NotAuthOnly>
        ),
    },
    {
        path: APP_URLS.HOME,
        element: (
            <RequireAuth>
                <MainPage />
            </RequireAuth>
        ),
        children: [{ path: APP_URLS.HOME, element: <HomeView /> }],
    },
]);

export default router;
