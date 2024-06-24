/** React */
import { useEffect, useRef, useState } from "react";

/** Helpers */
import requestParser from "../helpers/requestParser";

/** Axios */
import { AxiosResponse } from "axios";

const useResource = <T>(
    promiseFunction: (...args: any) => Promise<AxiosResponse<any, any>>,
    initValue: any,
    requestData: any[],
    deps: any[],
    requestSkips?: number
) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(initValue);
    const [error, setError] = useState(null);

    const skips = useRef(requestSkips || 0);

    useEffect(() => {
        if (skips.current > 0) {
            skips.current = skips.current - 1;

            return;
        }

        requestParser({
            promise: promiseFunction(...requestData),
            setIsLoading,
            onSuccess: (data) => {
                setData(data);
                setError(null);
            },
            onError: setError,
        });
    }, [...deps]);

    return { isLoading, data: data as T, error };
};

export default useResource;
