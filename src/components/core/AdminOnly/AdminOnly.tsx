/** React */
import { useEffect } from "react";

/** React Router */
import { useNavigate } from "react-router-dom";

/** Hooks */
import useObservable from "../../../hooks/useObservable";

/** Constants */
import { APP_URLS } from "../../../constants/app";

/** RXJS store */
import { currentUser$ } from "../../../rxjsStore/auth.rxjs-store";

/** Types */
interface AdminOnlyProps {
    children: React.ReactNode;
}

const AdminOnly = (props: AdminOnlyProps) => {
    const { children } = props;

    const naviagtor = useNavigate();

    const user = useObservable(currentUser$);

    useEffect(() => {
        if (!user || user.isAdmin) return;

        naviagtor(APP_URLS.HOME);
    }, [user, naviagtor]);

    return <>{children}</>;
};

export default AdminOnly;
