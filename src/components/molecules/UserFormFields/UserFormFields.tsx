/** Components */
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Input from "../../atoms/Input/Input";

/** Types */
import { ApiError } from "../../../types/error.types";
interface RegisterFormFieldsProps {
    email: string;
    setEmail: (email: string) => void;
    errors: ApiError[];
    setErrors: (errors: ApiError[]) => void;
    password: string;
    setPassword: (password: string) => void;
    isAdminChecked: boolean;
    setIsAdminChecked: (isAdminChecked: boolean) => void;
    isFromAdminPage?: boolean;
    hidePassword?: boolean;
    hideEmail?: boolean;
}

const UserFormFields = (props: RegisterFormFieldsProps) => {
    const {
        isFromAdminPage,
        email,
        setEmail,
        errors,
        setErrors,
        password,
        setPassword,
        isAdminChecked,
        setIsAdminChecked,
        hidePassword = false,
        hideEmail = false,
    } = props;

    return (
        <>
            {hideEmail || (
                <Input
                    inputProps={{
                        value: email,
                        placeholder: "Email",
                        type: "email",
                    }}
                    onChange={setEmail}
                    setErrors={setErrors}
                    label="Email"
                    fieldName="email"
                    errors={errors}
                    boxStyle={{ marginBottom: "16px" }}
                />
            )}
            {hidePassword || (
                <Input
                    inputProps={{
                        value: password,
                        placeholder: "Password",
                        type: "password",
                    }}
                    onChange={setPassword}
                    setErrors={setErrors}
                    label="Password"
                    fieldName="password"
                    errors={errors}
                    boxStyle={{ marginBottom: "16px" }}
                />
            )}

            {isFromAdminPage && (
                <Checkbox
                    isChecked={isAdminChecked}
                    onChange={setIsAdminChecked}
                    label="Is user an administrator"
                    wrapperStyle={{ marginBottom: "32px" }}
                />
            )}
        </>
    );
};

export default UserFormFields;
