/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface CentredTemplateProps {
    children: React.ReactNode;
}

const CentredTemplate = (props: CentredTemplateProps) => {
    const { children } = props;

    return <div className={styles["centred-template"]}>{children}</div>;
};

export default CentredTemplate;
