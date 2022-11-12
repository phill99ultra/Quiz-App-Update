import { AuthFormControls, FormControl } from "../interfaces/interfaces";

const email: FormControl = {    
    name: 'email',
    label: 'Email',   
};
const password: FormControl = {   
    name: 'password',
    label: 'Parola',    
}

export const AUTH_FIELDS_STATE: AuthFormControls = {            
    formControls: {
        email,
        password
    }
}