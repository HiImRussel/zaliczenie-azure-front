/** Axios */
import { AxiosResponse } from "axios";

const requestParser = (params: {
    promise: Promise<AxiosResponse<any, any>>;
    setIsLoading?: (isLoading: boolean) => void;
    onSuccess?: (data: any) => void;
    onError?: (errors: any) => void;
    callBack?: (data: any) => void;
}) => {
    const { promise, setIsLoading, onSuccess, onError, callBack } = params;

    setIsLoading?.(true);

    promise
        .then((response) => {
            onSuccess?.(response.data);
            callBack?.(response.data);

            return response;
        })
        .catch((error) => {
            const errors = error.response.data?.errors || error?.errors;

            onError?.(errors);

            return error;
        })
        .finally(() => setIsLoading?.(false));
};

export default requestParser;
