import React from 'react';
import { Typography, Divider } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

import { ButtonComponent } from '../../components/UI/Button/Button';
import { InputComponent } from '../../components/UI/Input/Input';
import { initialValues, OnlyCreateQuizKeys } from '../../formik/values/createQuizeValues';
import { createQuizSchema } from '../../formik/schemas/createQuizSchema';
import { CREATE_QUIZ_STATE } from '../../constants/createQuizValues';
import { FormWrapper } from '../../HOC/FormWrapper/FormWrapper';
import { ButtonsWrapper } from '../../HOC/Buttons/ButtonsWrapper';
import { SelectComponent } from '../../components/UI/Select/Select';

const QuizCreate: React.FC<{}> = () => {
    
    return(
        <FormWrapper>
            <Typography variant='h3'>Creează test</Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={createQuizSchema}
                onSubmit={(values, formikHelpers) => {
                    console.log('values ', values);
                    console.log('helpers ', formikHelpers);
                    console.log('-----------');
                }}
            >
                {
                    ({ values, errors, touched, handleBlur, handleChange, isValid }) => (
                        <Form>
                            {
                                Object.keys(CREATE_QUIZ_STATE.formControls).map((controlName, index) => {
                                    const control = CREATE_QUIZ_STATE.formControls[controlName as keyof typeof CREATE_QUIZ_STATE.formControls];
                                    const Idx = controlName as OnlyCreateQuizKeys;
                                    return (
                                        <React.Fragment key={`${controlName}${index}`}>
                                            <Field                                                
                                                as={InputComponent}
                                                inputName={control.name}
                                                inputLabel={control.label}
                                                inputVariant='outlined'
                                                inputHandleBlur={handleBlur}
                                                inputHandleChange={handleChange}
                                                inputValue={values[Idx]}
                                                inputError={errors[Idx] && touched[Idx] ? true : false}
                                                inputErrorText={errors[Idx] && touched[Idx] ? errors[Idx] : null}
                                            />
                                            { index === 0 && <Divider/> }
                                        </React.Fragment>
                                    )
                                })
                            }
                            <Field
                                as={SelectComponent}
                                selectName={CREATE_QUIZ_STATE.answer.name}
                                selectLabel={CREATE_QUIZ_STATE.answer.label}
                                selectValue={values.answer}
                                selectHandleChange={handleChange}
                                selectHandleBlur={handleBlur}
                                selectError={errors.answer && touched.answer ? true : false}                                
                                selectHelperText={errors.answer && touched.answer ? errors.answer : CREATE_QUIZ_STATE.answer.text}
                                options={CREATE_QUIZ_STATE.options}
                            />
                            <ButtonsWrapper>
                                <ButtonComponent
                                    title='Adaugă întrebare'
                                    variantBtn="contained" 
                                    typeBtn='submit'
                                    sizeBtn='medium' 
                                    colorBtn='primary'
                                    iconBtn={<PlaylistAddIcon fontSize="large" />}
                                    disableBtn={!isValid}
                                />
                                 <ButtonComponent
                                    title='Creare test'
                                    variantBtn="contained" 
                                    sizeBtn='medium' 
                                    colorBtn='success'
                                    iconBtn={<CreateNewFolderIcon fontSize="large" />}
                                />
                            </ButtonsWrapper>
                            {/* <pre>{JSON.stringify(values, null, 4)}</pre>   */}
                            {/* <pre>{JSON.stringify(errors, null, 4)}</pre>                        */}
                        </Form>
                    )
                }
            </Formik>
        </FormWrapper>
    )
}

export default QuizCreate;