/** RXJS Store */
import { destroySession } from "../../../rxjsStore/auth.rxjs-store";

/** Icons */
import { ReactComponent as LogOutIcon } from "../../../assets/icons/sign-out-alt.svg";

/** Styles */
import styles from "./styles.module.scss";

const LogOutBtn = () => {
    return (
        <div className={styles["logout-btn"]} onClick={destroySession}>
            <LogOutIcon />
        </div>
    );
};

export default LogOutBtn;
