import { gql } from '@apollo/client';

export const SEARCH = gql`
    query Search($searchTerm: String!) {
        search(searchTerm: $searchTerm) {
            id
            name
            image
            categoryId
        }
    }
`