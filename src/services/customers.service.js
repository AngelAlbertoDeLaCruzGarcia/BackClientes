const { models } = require('../libs/sequelize');
const relation = [
  {model: models.Room, as: 'Room'},
  {model: models.Income, as: 'Income'},
  {model: models.Travel, as: 'Travel'},
  {model: models.PersonalInterest, as: 'interests'},
  {model: models.Place, as: 'places'},
  {model: models.Book, as: 'books'}
  /* {model: models.CustomerBook, include:{model:models.Book}} */
];

class CustomersService { 

    constructor() {}

    async find() {
      const res = await models.Customer.findAll({include:relation});
      return res;
    }

    async findOne(id) {
      const res = await models.Customer.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.Customer.create(data);
      return res;
    }

    async update(id, data) {
      const model = await this.findOne(id);
      const res = await model.update(data);
      return res;
    }

    async delete(id) {
      const model = await this.findOne(id);
      await model.destroy();
      return { deleted: true };
    }
  
  }
  
  module.exports = CustomersService;