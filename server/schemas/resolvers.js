const { Offer } = require('../models')

const resolvers = {
    Query: {
        offers: async () => {
            return Offer.find().sort({ createdAt: -1 });
        },

        offer: async (parent, { offerId }) => {
            return Offer.findOne({ _id: offerId })
        },
    },

    Mutation: {
        addOffer: async (parent, { offerText, offerSender }) => {
            return Offer.create({ offerText, offerSender });
        },

        removeOffer: async (parent, { offerId }) => {
            return Offer.findOneAndDelete({ _id: offerId })
        },
    },
};

module.exports = resolvers;