import React from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

import { initialValues } from '../../../formik/values/quizTitleValues';
import { authSchema } from '../../../formik/schemas/quizTitleValues';
import { InputComponent } from '../../../components/UI/Input/Input';
import { ButtonComponent } from '../../../components/UI/Button/Button';
import { FormWrapper } from '../../../HOC/FormWrapper/FormWrapper';
import classes from './modal.module.css';
import { useQuizStore } from '../../../stores/quiz/store';
import { useCreateQuiz } from '../../../RQ/mutations/useCreateQuiz';

const ModalTitleQuiz: React.FC<{}> = () => {
    const [        
        quiz, 
        modalTitleQuiz,
        setModalTitleQuiz,
        setClearQuiz
    ] = useQuizStore(state => [        
        state.quiz,
        state.modalTitleQuiz,
        state.setModalTitleQuiz,  
        state.setClearQuiz     
    ]);

    const { mutate } = useCreateQuiz();
    return(
        <Dialog
            open={modalTitleQuiz}
            onClose={setModalTitleQuiz}
            className={classes.Modal}
            aria-labelledby="alert-dialog-title"
        >
            <FormWrapper>
                <DialogTitle                    
                    id="alert-dialog-title"
                >
                    Introduceți titlul testului.
                </DialogTitle>
                <Formik
                    initialValues={initialValues}
                    validationSchema={authSchema}
                    onSubmit={(values, actions) => {                       
                        mutate({
                            title: values.title,
                            items: quiz
                        });
                        actions.resetForm();
                        setModalTitleQuiz();
                        setClearQuiz();
                    }}
                >
                    {
                        ({ values, errors, touched, handleBlur, handleChange, isValid }) => (
                            <Form className={classes.ModalForm}>
                                <Field                                
                                    as={InputComponent}
                                    inputName='title'
                                    inputLabel='Titlu'
                                    inputVariant='outlined'
                                    inputHandleBlur={handleBlur}
                                    inputHandleChange={handleChange}
                                    inputValue={values.title}
                                    inputError={errors.title && touched.title ? true : false}
                                    inputErrorText={errors.title && touched.title ? errors.title : null}
                                />
                                <ButtonComponent
                                    typeBtn='submit'
                                    title='Creare test'
                                    variantBtn="contained" 
                                    sizeBtn='medium' 
                                    colorBtn='success'
                                    iconBtn={<CreateNewFolderIcon fontSize="large" />}                                  
                                    disableBtn={!isValid}
                                />
                            </Form>
                        )
                    }
                </Formik>
            </FormWrapper>
        </Dialog>
    )
}

export default ModalTitleQuiz;
