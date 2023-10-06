const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Offer {
        _id: ID
        OfferText: String
        offerSender: String
        createdAt: String
    }

    type Query {
        offers: [Offer]!
        offer(offerId: ID!): Offer
    }
`;

module.exports = typeDefs;