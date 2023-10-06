const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Offer {
        _id: ID
        offerText: String
        offerSender: String
        createdAt: String
    }

    type Query {
        offers: [Offer]!
        offer(offerId: ID!): Offer
    }

    type Mutation {
        addOffer(offerText: String!, offerSender: String!): Offer
        removeOffer(offerId: ID!): Offer
    }
`;

module.exports = typeDefs;