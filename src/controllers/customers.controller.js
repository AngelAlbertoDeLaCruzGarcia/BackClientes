const CustomersService = require('../services/customers.service');
const CustomerBooksService = require('../services/customerBooks.service');
const CustomerInterestsService = require('../services/customerInterests.service');
const CustomerPlacesService = require('../services/customerPlaces.service');

const service = new CustomersService();
const service2 = new CustomerBooksService();
const service3 = new CustomerPlacesService();
const service4 = new CustomerInterestsService();

const create = async ( req, res ) => {
    try { 
        const response = await service.create(req.body);
        //const obj = {book_id:, customer_id: };
        const books = req.body.books;
        const places = req.body.places;
        const interests = req.body.interests;
        response.books = books;
        response.places = places;
        response.interests = interests;
        for (i = 0; i < books.length; i++) {
            books[i].customer_id = response.id;
        } 
        for (i = 0; i < places.length; i++) {
            places[i].customer_id = response.id;
        } 
        for (i = 0; i < interests.length; i++) {
            interests[i].customer_id = response.id;
        } 
        await service2.create(books);
        await service3.create(places);
        await service4.create(interests);
        res.json({ success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const get = async ( req, res ) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getById = async ( req, res ) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const _delete = async (req, res) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = {
    create, get, getById, update, _delete
};
