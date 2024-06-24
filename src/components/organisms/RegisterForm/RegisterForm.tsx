/** React */
import { FormEvent } from "react";

/** React router */
import { NavLink, useNavigate } from "react-router-dom";

/** Hooks */
import useUserForm from "../../../hooks/useUserForm";

/** Constants */
import { APP_URLS } from "../../../constants/app";

/** Services */
import AuthServiceInstance from "../../../services/auth.service";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** Components */
import Button from "../../atoms/Button/Button";
import UserFormFields from "../../molecules/UserFormFields/UserFormFields";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface RegisterFormProps {
    isFromAdminPage?: boolean;
}

const RegisterForm = (props: RegisterFormProps) => {
    /** Props */
    const { isFromAdminPage } = props;

    /** Hooks */
    const registerFormData = useUserForm({});

    /** Router */
    const navigate = useNavigate();

    /** Handlers */
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email: registerFormData.email,
            password: registerFormData.password,
            phoneNumber: registerFormData.phoneNumber,
            address: registerFormData.address,
            city: registerFormData.city,
            postalCode: registerFormData.postalCode,
            country: registerFormData.country,
        };

        requestParser({
            promise: AuthServiceInstance.register(data),
            onSuccess: () => navigate(APP_URLS.LOGIN),
            onError: registerFormData.setErrors,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <UserFormFields {...registerFormData} />

            <Button fullWidth>
                {" "}
                {isFromAdminPage ? "Add user" : "Register"}
            </Button>

            {!isFromAdminPage && (
                <>
                    <span className={styles["register-form__or-wrapper"]}>
                        <span className={styles["register-form__or-text"]}>
                            or
                        </span>
                    </span>

                    <p className={styles["register-form__login-text"]}>
                        Go back to <NavLink to={APP_URLS.LOGIN}>login</NavLink>
                    </p>
                </>
            )}
        </form>
    );
};

export default RegisterForm;
