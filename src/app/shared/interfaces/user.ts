import { IAddress } from "./address";
import { IName } from "./name";

export interface IUser {
    _id: string;
    username: string;
    name: IName;
    email: string;
    phone: string;
    address: IAddress;
    password: string;
}