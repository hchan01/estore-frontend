import { gql } from '@apollo/client';

export const PRODUCT_LIST_FETCH = gql`
    query GetProducts($categoryId: Int!) {
        products( where: { categoryId: { equals: $categoryId } } ) {
            id
            name
            brand
            unitPrice
            image
            slug
            categoryId
        }
    }
`