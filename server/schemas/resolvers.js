const { Offer } = require('../models')

const resolvers = {
    Query: {
        offers: async () => {
            return Offer.find().sort({ createdAt: -1 });
        },

        offer: async (parent, { offerId }) => {
            return Offer.findOne({ _id: offerId })
        },
    }
};

module.exports = resolvers;