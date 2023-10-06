import { gql } from '@apollo/client';

export const ADD_OFFER = gql`
    mutation addOffer($offerText: String!, $offerSender: String!) {
        addOffer(offerText: $offerText, offerSender: $offerSender) {
            _id
            offerText
            offerSender
            createdAt
        }
    }
`;