/** RXJS */
import { BehaviorSubject } from "rxjs";

/** UUID */
import { v4 as uuidv4 } from "uuid";

/** Constants */
import { ALERTS_HIDE_TIME_MS } from "../constants/app";

/** Types */
import { Alert, AlertType } from "../types/alerts.types";

const alerts$ = new BehaviorSubject<Alert[]>([]);

const pushAlert = (message: string, type: AlertType) => {
    const alert: Alert = {
        id: uuidv4(),
        message,
        type,
    };

    alerts$.next([alert, ...alerts$.getValue().slice(0, 2)]);

    setTimeout(() => {
        alerts$.next(alerts$.getValue().filter((a) => a.id !== alert.id));
    }, ALERTS_HIDE_TIME_MS);
};

const closeAlert = (id: string) =>
    alerts$.next(alerts$.getValue().filter((a) => a.id !== id));

export { alerts$, pushAlert, closeAlert };
