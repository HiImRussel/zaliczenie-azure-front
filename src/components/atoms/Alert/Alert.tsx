/** RXJS Store */
import { closeAlert } from "../../../rxjsStore/alerts.rxjs-store";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { Alert } from "../../../types/alerts.types";
interface AlertProps {
    alert: Alert;
}

const AlertComponent = (props: AlertProps) => {
    const { alert } = props;

    const handleClick = () => closeAlert(alert.id);

    return (
        <div
            onClick={handleClick}
            className={`${styles["alert"]} ${styles[`alert--${alert.type}`]}`}
        >
            {alert.message}
        </div>
    );
};

export default AlertComponent;
