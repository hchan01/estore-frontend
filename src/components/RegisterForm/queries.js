import { gql } from '@apollo/client';

export const USER_REGISTER = gql`
    mutation CreateUser($email: String!, $password: String!) {
        createUser(email: $email, password: $password) {
            id
            email
            token
        }
    }
`