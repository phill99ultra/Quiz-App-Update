import { ERRORS } from "../interfaces/interfaces"

export const SetErrorText = (errorText: string) => {   
    switch(errorText) {
        case ERRORS.INVALID_PASSWORD:
            return 'Parolă greșită!';           
        case ERRORS.EMAIL_NOT_FOUND:
            return 'Nu există așa utilizator!';
        case ERRORS.EMAIL_EXISTS:
            return 'Așa utilizator deja există!';
    }
}