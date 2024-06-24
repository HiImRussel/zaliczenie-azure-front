/** Components */
import ContentWrapper from "../../organisms/ContentWrapper/ContentWrapper";
import Nav from "../../organisms/Nav/Nav";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface MainTemplateProps {
    children?: React.ReactNode;
}

const MainTemplate = (props: MainTemplateProps) => {
    const { children } = props;

    return (
        <div className={styles["app-wrapper"]}>
            <Nav />

            <div className={styles["app-wrapper__content"]}>
                <ContentWrapper>{children}</ContentWrapper>
            </div>
        </div>
    );
};

export default MainTemplate;
