import React, { useState } from 'react';
import './RegisterForm.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useMutation } from '@apollo/client';
import { IS_LOGGED_IN } from '../../queries';
import { cache } from '../../cache';
import { USER_REGISTER } from './queries';

const schema = yup.object({
    email: yup.string()
        .email('Invalid email address format')
        .required('Please enter your email address'),
    password: yup.string()
        .required('Please enter your password'),
    passwordConfirm: yup.string()
        .required('Please confirm your password')
});

export const RegisterForm = () => {
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [emailTaken, setEmailTaken] = useState(false);

    const [createUser] = useMutation(USER_REGISTER);

    return (
        <div className="container text-center">
            {
                registerSuccess

                ?
                
                <h2>Thank you. Your account has been created.</h2>

                : 
            
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        email: '',
                        password: '',
                        passwordConfirm: ''
                    }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={async ({ email, password }) => {
                        try {
                            await createUser({
                                variables: {
                                    email,
                                    password
                                }
                            });

                            setEmailTaken(false);
                            setRegisterSuccess(true);

                            cache.writeQuery({
                                query: IS_LOGGED_IN,
                                data: {
                                    isLoggedIn: true
                                }
                            });
    
                            localStorage.setItem('isLoggedIn', 'true');
                        } catch(error) {
                            switch (error.message) {
                                case 'EMAIL_TAKEN':
                                    setEmailTaken(true);
                                    break;
                                default:
                            }
                        }
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                        validateForm
                    }) => (
                        <Form className="register-form mx-auto text-left" onSubmit={handleSubmit}>
                            <h1>Create an account</h1>

                            { emailTaken && <Alert variant="danger">You already have an account registered to this email address. Please sign in.</Alert> }

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="passwordConfirm">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={values.passwordConfirm}
                                    onChange={handleChange}
                                    isInvalid={!!errors.passwordConfirm}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.passwordConfirm}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="btn-block">Create account</Button>
                        </Form>
                    )}
                </Formik>
            }
        </div>
    )
}