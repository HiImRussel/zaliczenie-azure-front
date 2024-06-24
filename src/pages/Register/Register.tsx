/** Components */
import RegisterForm from "../../components/organisms/RegisterForm/RegisterForm";
import AuthTemplate from "../../components/templates/AuthTemplate/AuthTemplate";

/** Styles */
import styles from "./styles.module.scss";

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <h1 className={styles["register-page__title"]}>Register</h1>

            <RegisterForm />
        </AuthTemplate>
    );
};

export default RegisterPage;
