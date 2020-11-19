import React, { useState } from 'react';
import './styles.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { login } from './actions';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    email: yup.string()
        .email('Invalid email address format')
        .required('Please enter your email address'),
    password: yup.string()
        .required('Please enter your password')
});

const SignInForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

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
                onSubmit={(values) => {
                    console.log("Login Form Submit");
                    dispatch(login(values.email, values.password));
                    history.push('/');
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

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            {/* <FontAwesomeIcon icon={faUser} className="signin__icon" /> */}
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
                            {/* <FontAwesomeIcon icon={faLock} className="signin__icon" /> */}
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

export default SignInForm;