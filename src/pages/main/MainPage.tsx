/** React router */
import { Outlet } from "react-router-dom";

/** Components */
import MainTemplate from "../../components/templates/Main/MainTemplate";

const MainPage = () => {
    return (
        <>
            <MainTemplate>
                <Outlet />
            </MainTemplate>
        </>
    );
};

export default MainPage;
