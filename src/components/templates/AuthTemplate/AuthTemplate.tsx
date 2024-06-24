/** Components */
import CentredTemplate from "../Centred/Centred";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface AuthTemplateProps {
    children: React.ReactNode;
}

const AuthTemplate = (props: AuthTemplateProps) => {
    const { children } = props;

    return (
        <CentredTemplate>
            <div className={styles["auth-template"]}>{children}</div>
        </CentredTemplate>
    );
};

export default AuthTemplate;
