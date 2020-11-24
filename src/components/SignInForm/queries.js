import { gql } from '@apollo/client';

export const USER_SIGNIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`