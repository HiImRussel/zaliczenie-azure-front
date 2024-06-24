/** RXJS */
import { BehaviorSubject } from "rxjs";

/** UUID */
import { v4 as uuidv4 } from "uuid";

export const reloadTasksToken$ = new BehaviorSubject(uuidv4());
