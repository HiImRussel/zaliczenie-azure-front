/** URLs */
import API_ENDPOINTS from "../urls";

/** RXJS Store */
import { pushAlert } from "../rxjsStore/alerts.rxjs-store";

/** Services */
import ApiService from "./api.service";

/** Types */
interface LoginData {
    email: string;
    password: string;
}

interface RegisterData {
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    city: string;
    postalCode: string;
    isAdmin?: boolean;
}

class AuthService extends ApiService {
    /** Get */
    public refreshToken = () => this.get(API_ENDPOINTS.auth.refreshToken);

    /** Post */
    public login = (data: LoginData) =>
        this.post(API_ENDPOINTS.auth.login, data)
            .then((res) => {
                pushAlert("Logged in successfully", "success");

                return res;
            })
            .catch((err) => {
                pushAlert("Error while logging in", "error");

                throw err;
            });

    public register = (data: RegisterData) =>
        this.post(API_ENDPOINTS.auth.register, data)
            .then((res) => {
                pushAlert("Registered successfully", "success");

                return res;
            })
            .catch((err) => {
                pushAlert("Error while registering", "error");

                throw err;
            });
}

const AuthServiceInstance = new AuthService();

export default AuthServiceInstance;
