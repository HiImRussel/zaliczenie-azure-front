/** React router */
import { NavLink } from "react-router-dom";

/** Hooks */
import useLoginForm from "../../../hooks/useLoginForm";

/** Constants */
import { APP_URLS } from "../../../constants/app";

/** Components */
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

/** Styles */
import styles from "./styles.module.scss";

const LoginForm = () => {
    /** Hooks */
    const {
        handleSubmit,
        setEmail,
        email,
        errors,
        setPassword,
        password,
        generalError,
        isLoading,
        setErrors,
    } = useLoginForm();

    return (
        <form className={styles["login-form"]} onSubmit={handleSubmit}>
            <Input
                inputProps={{
                    type: "text",
                    placeholder: "E-mail",
                    value: email,
                }}
                boxStyle={{ marginBottom: "16px" }}
                label="E-mail"
                errors={errors}
                fieldName="email"
                onChange={setEmail}
                setErrors={setErrors}
            />
            <Input
                inputProps={{
                    type: "password",
                    placeholder: "Password",
                    value: password,
                }}
                boxStyle={{ marginBottom: "16px" }}
                label="Password"
                errors={errors}
                onChange={setPassword}
                setErrors={setErrors}
                fieldName="password"
            />

            {generalError && (
                <span className={styles["login-form__login-error"]}>
                    {generalError.message}
                </span>
            )}

            <Button fullWidth isLoading={isLoading}>
                Login
            </Button>

            <span className={styles["login-form__or-wrapper"]}>
                <span className={styles["login-form__or-text"]}>or</span>
            </span>

            <p className={styles["login-form__register-text"]}>
                <NavLink to={APP_URLS.REGISTER}>Register</NavLink> your account
                for free
            </p>
        </form>
    );
};

export default LoginForm;
