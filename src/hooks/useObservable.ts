/** React */
import { useEffect, useState } from "react";

/** RXJS */
import { Observable } from "rxjs";

const useObservable = <T>(observable: Observable<T>, initialValue?: any) => {
    const [value, setValue] = useState<T>(initialValue);

    useEffect(() => {
        const subscription = observable.subscribe(setValue);
        return () => subscription.unsubscribe();
    }, [observable]);

    return value;
};

export default useObservable;
