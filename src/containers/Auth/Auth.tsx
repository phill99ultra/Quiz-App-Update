import React from 'react';
import { Typography, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import classes from './auth.module.css';
import { initialValues } from '../../formik/values/authValues';
import { ButtonComponent } from '../../components/UI/Button/Button';
import { InputComponent } from '../../components/UI/Input/Input';
import { authSchema } from '../../formik/schemas/authSchema';
import { AUTH_FIELDS_STATE } from '../../constants/authFieldsState';
import { OnlyAuthKeys } from '../../formik/values/authValues';

const Auth: React.FC<{}> = () => {  
    const handleRegister = () => {
        console.log('register');
    }
    return(
        <Box className={classes.Auth}>
            <Typography variant='h3'>Autorizație profil</Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={authSchema}
                onSubmit={(values, formikHelpers) => {
                    console.log('values ', values);
                    console.log('helpers ', formikHelpers);
                    console.log('-----------')
                }}
            >
                {
                    ({ values, errors, touched, handleBlur, handleChange, isValid }) => (
                        <Form>
                            {
                                Object.keys(AUTH_FIELDS_STATE.formControls).map((controlName, index) => {
                                    const control = AUTH_FIELDS_STATE.formControls[controlName as keyof typeof AUTH_FIELDS_STATE.formControls];
                                    return (
                                        <Field
                                            key={`${controlName}${index}`}
                                            as={InputComponent}
                                            inputName={control.name}
                                            inputVariant='outlined'
                                            inputHandleBlur={handleBlur}
                                            inputHandleChange={handleChange}
                                            inputValue={values[controlName as OnlyAuthKeys]}
                                            inputError={errors[controlName as OnlyAuthKeys] && touched[controlName as OnlyAuthKeys] ? true : false}
                                            inputErrorText={errors[controlName as OnlyAuthKeys] && touched[controlName as OnlyAuthKeys] ? errors[controlName as OnlyAuthKeys] : null}
                                        />
                                    )
                                })
                            }                           
                            <Box className={classes.BtnWrapper}>
                                <ButtonComponent
                                    typeBtn='submit'
                                    title='Logare'
                                    variantBtn="contained" 
                                    sizeBtn='medium' 
                                    colorBtn='success'
                                    endIconBtn={<LoginIcon fontSize="large" />}                                    
                                    disableBtn={!isValid}
                                />
                                <ButtonComponent
                                    title='Înregistrare'
                                    variantBtn="contained" 
                                    sizeBtn='medium' 
                                    colorBtn='primary'
                                    endIconBtn={<PersonAddIcon fontSize="large" />}
                                    onClick={() => handleRegister()}
                                />
                            </Box> 
                            {/* <pre>{JSON.stringify(values, null, 4)}</pre>  
                            <pre>{JSON.stringify(errors, null, 4)}</pre>                        */}
                        </Form>
                    )
                }
            </Formik>
        </Box>
    )
}

export default Auth;