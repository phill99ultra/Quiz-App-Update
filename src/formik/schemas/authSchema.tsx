import * as yup from 'yup';

export const authSchema = yup.object().shape({
    email: yup.string().email('Introduceți corect poșta electronică!').matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, 'Introduceți corect poșta electronică!').required('Acest cîmp este obligatoriu!'),
    password: yup.string().min(6, 'Parola trebuie să aibă cel puțin șase caractere!').required('Acest cîmp este obligatoriu!')
});