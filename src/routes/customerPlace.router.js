const express = require('express');
const router = express.Router(); 
const customerPlacesController = require('../controllers/customerPlaces.controller');

router
    .get('/', customerPlacesController.get )
    .get('/:id', customerPlacesController.getById )
    .post('/', customerPlacesController.create )
    .put('/:id', customerPlacesController.update )
    .delete('/:id', customerPlacesController._delete );

module.exports = router;