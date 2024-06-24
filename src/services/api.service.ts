/** Axios */
import axios from "axios";

class ApiService {
    public get = (url: string) => axios.get(url);
    public post = (url: string, data: unknown) => axios.post(url, data);
    public put = (url: string, data: unknown) => axios.put(url, data);
    public patch = (url: string, data: unknown) => axios.patch(url, data);
    public delete = (url: string) => axios.delete(url);
}

export default ApiService;
