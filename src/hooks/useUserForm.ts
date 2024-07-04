/** React */
import { useState } from "react";

/** Types */
import { ApiError } from "../types/error.types";
interface UseUserFormArgs {
    email?: string;
    password?: string;
    isAdminChecked?: boolean;
}

const useUserForm = (args: UseUserFormArgs) => {
    const [email, setEmail] = useState(args.email || "");
    const [password, setPassword] = useState(args.password || "");
    const [isAdminChecked, setIsAdminChecked] = useState(
        args.isAdminChecked || false
    );
    const [errors, setErrors] = useState<ApiError[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    return {
        email,
        setEmail,
        password,
        setPassword,
        isAdminChecked,
        setIsAdminChecked,
        errors,
        setErrors,
        isLoading,
        setIsLoading,
    };
};

export default useUserForm;
