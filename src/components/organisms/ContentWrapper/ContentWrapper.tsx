/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface ContentWrapperProps {
    children?: React.ReactNode;
}

const ContentWrapper = (props: ContentWrapperProps) => {
    const { children } = props;

    return <div className={styles["content-wrapper"]}>{children}</div>;
};

export default ContentWrapper;
