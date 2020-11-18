import React from 'react';
import './styles.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { register } from './actions';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    email: yup.string()
        .email('Invalid email address format')
        .required('Please enter your email address'),
    password: yup.string()
        .required('Please enter your password'),
    passwordConfirm: yup.string()
        .required('Please confirm your password')
});

const RegisterForm = () => {
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
                    console.log("Register Form Submit");
                    dispatch(register(values.email, values.password));
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
                    <Form className="register-form mx-auto" onSubmit={handleSubmit}>
                        <h1>Create an account</h1>

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
        </div>
    )
}

export default RegisterForm;