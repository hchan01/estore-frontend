import { gql } from '@apollo/client';

export const CART_FETCH = gql`
    query CartFetch($cartId: Int!) {
        cart( where:{ id: $cartId } ) {
            cartLineItem {
                id
                quantity
                product {
                    id
                    name
                    unitPrice
                    image
                    slug
                }
            }
        }
    }
`