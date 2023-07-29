const express = require('express'); 

const customersRouter = require('./customer.router');
const customerInteresRouter = require('./customerInterest.router');
const customerPlaceRouter = require('./customerPlace.router');
const customerBookRouter = require('./customerBook.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/customers', customersRouter);
  router.use('/customerInterests', customerInteresRouter);
  router.use('/customerPlaces', customerPlaceRouter);
  router.use('/customerBooks', customerBookRouter);
}

module.exports = routerApi;
