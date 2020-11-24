import React, { useState } from 'react';
import './SignInForm.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { NavLink } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { IS_LOGGED_IN } from '../../queries';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { cache } from '../../cache';
import { USER_SIGNIN } from './queries';

const schema = yup.object({
    email: yup.string()
        .email('Invalid email address format')
        .required('Please enter your email address'),
    password: yup.string()
        .required('Please enter your password')
});

export const SignInForm = () => {
    const history = useHistory();
    const [incorrectDetails, setIncorrectDetails] = useState(false);

    const [login] = useMutation(USER_SIGNIN);

    return (
        <div className="container">
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
                        await login({
                            variables: {
                                email,
                                password
                            }
                        });

                        cache.writeQuery({
                            query: IS_LOGGED_IN,
                            data: {
                                isLoggedIn: true
                            }
                        });

                        localStorage.setItem('isLoggedIn', 'true');

                        history.push('/');
                    } catch(error) {
                        switch (error.message) {
                            case 'INCORRECT_DETAILS':
                                setIncorrectDetails(true);
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
                    <Form className="sign-in-form mx-auto" onSubmit={handleSubmit}>
                        <h1>Sign in</h1>

                        { incorrectDetails && <Alert variant="danger">Sorry, either you aren’t registered using the email address you have provided or the password you entered is incorrect. Please try again.</Alert> }

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
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
                                onChange={handleChange}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Stay signed in" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn-block">Sign In</Button>

                        <NavLink exact to='/register'>Create an account</NavLink>
                    </Form>
                )}
            </Formik>
        </div>
    )
}