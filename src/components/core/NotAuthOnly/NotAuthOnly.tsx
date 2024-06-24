/** React */
import { useEffect } from "react";

/** React router */
import { useNavigate } from "react-router-dom";

/** Constants */
import { APP_URLS } from "../../../constants/app";

/** Hooks */
import useObservable from "../../../hooks/useObservable";

/** RXJS store */
import { currentUser$ } from "../../../rxjsStore/auth.rxjs-store";

/** Types */
interface NotAuthOnlyProps {
    children: React.ReactNode;
}

const NotAuthOnly = (props: NotAuthOnlyProps) => {
    const { children } = props;

    const navigation = useNavigate();

    const user = useObservable(currentUser$);

    useEffect(() => {
        if (!user || user.id === null) return;

        navigation(APP_URLS.HOME);
    }, [user, navigation]);

    if (!user || user.id !== null) return null;

    return <>{children}</>;
};

export default NotAuthOnly;
