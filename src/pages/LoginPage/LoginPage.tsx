/** Components */
import LoginForm from "../../components/organisms/LoginForm/LoginForm";
import AuthTemplate from "../../components/templates/AuthTemplate/AuthTemplate";

/** Styles */
import styles from "./styles.module.scss";

const LoginPage = () => {
    return (
        <AuthTemplate>
            <h1 className={styles["login__title"]}>Login</h1>

            <LoginForm />
        </AuthTemplate>
    );
};

export default LoginPage;
