const db = require('../config/connection');
const { Offer } = require('../models');
const offerSeeds = require('./offerSeeds.json');

db.once('open', async () => {
    await Offer.deleteMany({});
    await Offer.create(offerSeeds);
  
    console.log('Database seeded!');
    process.exit(0);
});