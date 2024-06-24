/** Hooks */
import useObservable from "../../../hooks/useObservable";

/** RXJS Store */
import { alerts$ } from "../../../rxjsStore/alerts.rxjs-store";

/** Components */
import AlertComponent from "../../atoms/Alert/Alert";

/** Styles */
import styles from "./styles.module.scss";

const Alerts = () => {
    const alerts = useObservable(alerts$, []);

    return (
        <div className={styles["alerts"]}>
            {alerts.map((alert) => (
                <AlertComponent key={alert.id} alert={alert} />
            ))}
        </div>
    );
};

export default Alerts;
