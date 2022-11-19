import * as yup from 'yup';

export const authSchema = yup.object().shape({
    title: yup.string().min(4, 'Titlul trebuie să conțină mai multe caractere!').required('Acest cîmp este obligatoriu!')
});