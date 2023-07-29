const express = require('express');
const router = express.Router(); 
const customersController = require('../controllers/customers.controller');

router
    .get('/', customersController.get )
    .get('/:id', customersController.getById )
    .post('/', customersController.create )
    .put('/:id', customersController.update )
    .delete('/:id', customersController._delete );

module.exports = router;
