import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object({
    email: yup.string()
        .email('Invalid email address format')
        .required('Please enter your email address'),
    firstName: yup.string()
        .required('Please enter your first name'),
    lastName: yup.string()
        .required('Please enter your last name')
});

export const UserDetailsScreen = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.post(process.env.REACT_APP_API_URL, {
                query: `
                    query {
                        user(where: {id: 1}) {
                            id
                            firstName
                            lastName
                            email
                        }
                    }
                `
            });
            setUser(data.data.user);
        }

        fetchData();
    }, []);

    return (
        <div className="container">
            <Formik
                validationSchema={schema}
                initialValues={{
                    email: '',
                    firstName: '',
                    lastName: '',
                    password: ''
                }}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={async (values) => {
                    const { data } = await axios.post(process.env.REACT_APP_API_URL, {
                        query: `
                            mutation {
                                updateUser(
                                    where: { id: 1 },
                                    data: {
                                        email: { set: "${values.email}" }
                                        firstName: { set: "${values.firstName}" }
                                        lastName: { set: "${values.lastName}" }
                                    }
                                ) {
                                    id
                                    email
                                    firstName
                                    lastName
                                }
                            }
                        `
                    });
                    console.log('submitted', data.data.user);
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
                    validateForm,
                    initialValues
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <h1>Your Details</h1>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                                values={values.email}
                                defaultValue={user.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First name"
                                onChange={handleChange}
                                isInvalid={!!errors.firstName}
                                values={values.firstName}
                                defaultValue={user.firstName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.firstName}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last name"
                                onChange={handleChange}
                                isInvalid={!!errors.lastName}
                                values={values.lastName}
                                defaultValue={user.lastName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.lastName}
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
                            <Form.Text className="text-muted">
                                Leave password blank to keep the same password
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="btn-block">Update</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}