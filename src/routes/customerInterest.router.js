const express = require('express');
const router = express.Router(); 
const customerInterestsController = require('../controllers/customerInterests.controller');

router
    .get('/', customerInterestsController.get )
    .get('/:id', customerInterestsController.getById )
    .post('/', customerInterestsController.create )
    .put('/:id', customerInterestsController.update )
    .delete('/:id', customerInterestsController._delete );

module.exports = router;