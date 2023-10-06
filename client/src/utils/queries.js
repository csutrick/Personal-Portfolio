import { gql } from '@apollo/client';

export const QUERY_OFFERS = gql`
    query getOffers {
        offers {
            _id
            offerText
            offerSender
            createdAt
        }
    }
`;