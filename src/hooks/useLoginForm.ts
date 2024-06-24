/** React */
import { FormEvent, useMemo, useState } from "react";

/** React router */
import { useNavigate } from "react-router-dom";

/** Constants */
import { APP_URLS } from "../constants/app";

/** Helpers */
import getGeneralError from "../helpers/getGeneralError";
import requestParser from "../helpers/requestParser";

/** Services */
import AuthServiceInstance from "../services/auth.service";

/** Types */
import { LoginResponse } from "../types/login.types";
import { ApiError } from "../types/error.types";
import { setAuthSession } from "../rxjsStore/auth.rxjs-store";

const useLoginForm = () => {
    /** State */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<ApiError[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    /** Router */
    const navigate = useNavigate();

    /** Data */
    const generalError = useMemo(() => getGeneralError(errors), [errors]);

    /** Handlers */
    const handleLoginSuccess = (data: LoginResponse) => {
        setAuthSession(data.user, data.token, data.expireTime);
        navigate(APP_URLS.HOME);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        requestParser({
            promise: AuthServiceInstance.login({ email, password }),
            setIsLoading,
            onError: setErrors,
            callBack: handleLoginSuccess,
        });
    };

    return {
        errors,
        password,
        email,
        isLoading,
        setEmail,
        setPassword,
        handleSubmit,
        generalError,
        setErrors,
    };
};

export default useLoginForm;
