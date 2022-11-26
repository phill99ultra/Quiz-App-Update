import React from 'react';
import { Typography, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { initialValues } from '../../formik/values/authValues';
import { ButtonComponent } from '../../components/UI/Button/Button';
import { InputComponent } from '../../components/UI/Input/Input';
import { authSchema } from '../../formik/schemas/authSchema';
import { AUTH_FIELDS_STATE } from '../../constants/authFieldsState';
import { OnlyAuthKeys } from '../../formik/values/authValues';
import { FormWrapper } from '../../HOC/FormWrapper/FormWrapper';
import { ButtonsWrapper } from '../../HOC/Buttons/ButtonsWrapper';
import { useAuthSign } from '../../RQ/mutations/useAuthSign';
import { LoaderComponent } from '../../components/UI/Loader/Loader';
import { AlertComponent } from '../../components/UI/Alert/Alert';

const Auth: React.FC<{}> = () => {    
    const { mutate, data, error, isError, isLoading } = useAuthSign();
    let submitAction: string | undefined = undefined;
    
    const handleRegister = (email: string, password: string, returnSecureToken: boolean) => {
        mutate({ email, password, returnSecureToken });
    };  

    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <LoaderComponent/>
        </Box>
    );       

    return(       
        <FormWrapper>           
            <Typography variant='h3'>Autorizație profil</Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={authSchema}
                onSubmit={(values, actions) => {
                    if (submitAction === "primary") handleRegister(values.email, values.password, true);
                    if (submitAction === "secondary") handleRegister(values.email, values.password, false);                  
                    actions.resetForm();                    
                }}
            >
                {
                    ({ values, errors, touched, handleBlur, handleChange, handleSubmit, isValid }) => (
                        <Form>
                            {
                                Object.keys(AUTH_FIELDS_STATE.formControls).map((controlName, index) => {
                                    const control = AUTH_FIELDS_STATE.formControls[controlName as keyof typeof AUTH_FIELDS_STATE.formControls];
                                    const Idx = controlName as OnlyAuthKeys;
                                    return (
                                        <Field
                                            key={`${controlName}${index}`}
                                            as={InputComponent}
                                            inputName={control.name}
                                            inputLabel={control.label}
                                            inputVariant='outlined'
                                            inputType={control.name === 'password' ? 'password' : ''}
                                            inputHandleBlur={handleBlur}
                                            inputHandleChange={handleChange}
                                            inputValue={values[Idx]}
                                            inputError={errors[Idx] && touched[Idx] ? true : false}
                                            inputErrorText={errors[Idx] && touched[Idx] ? errors[Idx] : null}
                                        />
                                    )
                                })
                            }                           
                            <ButtonsWrapper>
                                <ButtonComponent   
                                    typeBtn='button'                                 
                                    title='Logare'
                                    variantBtn="contained" 
                                    sizeBtn='medium' 
                                    colorBtn='success'
                                    iconBtn={<LoginIcon fontSize="large" />}                                    
                                    disableBtn={!isValid}
                                    onClick={() => {
                                        submitAction='primary';
                                        handleSubmit();
                                    }}
                                />
                                <ButtonComponent                                    
                                    title='Înregistrare'
                                    variantBtn="contained" 
                                    sizeBtn='medium' 
                                    colorBtn='primary'
                                    iconBtn={<PersonAddIcon fontSize="large" />}  
                                    typeBtn='button'
                                    disableBtn={!isValid} 
                                    onClick={() => {
                                        submitAction='secondary';
                                        handleSubmit();
                                    }}                                
                                />
                            </ButtonsWrapper>                          
                        </Form>
                    )
                }
            </Formik>
            {
                isError && error && <AlertComponent error={error}/>
            }
        </FormWrapper>
    )
}

export default Auth;