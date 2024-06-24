/** Components */
import NavLinks from "../../molecules/NavLinks/NavLinks";

/** Styles */
import styles from "./styles.module.scss";

const Nav = () => {
    return (
        <div className={styles["nav"]}>
            <NavLinks />
        </div>
    );
};

export default Nav;
