import { gql } from '@apollo/client';

export const CART_ADD_ITEM = gql`
    mutation CartAddItem($productId: Int!, $quantity: Int!) {
        addToCart(productId: $productId, quantity: $quantity) {
            id
                cartLineItem {
                product {
                    id
                    name
                    unitPrice
                }
            }
        }
    }
`