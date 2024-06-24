/** Hooks */
import { useEffect } from "react";

/** React router */
import { useNavigate } from "react-router-dom";

/** Hooks */
import useObservable from "../../../hooks/useObservable";

/** Constants */
import { APP_URLS } from "../../../constants/app";

/** RXJS store */
import { currentUser$ } from "../../../rxjsStore/auth.rxjs-store";

/** Types */
interface RequireAuthProps {
    children: React.ReactNode;
}

const RequireAuth = (props: RequireAuthProps) => {
    const { children } = props;

    const navigation = useNavigate();

    const user = useObservable(currentUser$);

    useEffect(() => {
        if (!user || user.id !== null) return;

        navigation(APP_URLS.LOGIN);
    }, [user, navigation]);

    if (!user || user.id === null) return null;

    return <>{children}</>;
};

export default RequireAuth;
