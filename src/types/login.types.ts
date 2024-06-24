/** Types */
import { User } from "./user.types";

export interface LoginResponse {
    token: string;
    expireTime: number;
    user: User;
}
