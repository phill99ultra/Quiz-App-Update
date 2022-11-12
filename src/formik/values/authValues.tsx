import { AuthValues } from "../../interfaces/interfaces";

export const initialValues: AuthValues = {
    email: '',
    password: ''
};

export type OnlyAuthKeys = keyof AuthValues;

