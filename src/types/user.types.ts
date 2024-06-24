export interface UserAdditionalData {
    phoneNumber: string;
    address: string;
    city: string;
    postalCode: string;
    isAdmin: boolean;
}

export interface User extends UserAdditionalData {
    id: number;
    email: string;
}
