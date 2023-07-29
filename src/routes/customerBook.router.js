const express = require('express');
const router = express.Router(); 
const customerBooksController = require('../controllers/customerBooks.controller');

router
    .get('/', customerBooksController.get )
    .get('/:id', customerBooksController.getById )
    .post('/', customerBooksController.create )
    .put('/:id', customerBooksController.update )
    .delete('/:id', customerBooksController._delete );

module.exports = router;