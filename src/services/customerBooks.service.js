const { models } = require('../libs/sequelize');

class CustomerBooksService { 
  
    constructor() {}

    async find() {
      const res = await models.CustomerBook.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.CustomerBook.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.CustomerBook.bulkCreate(data);
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
  
  module.exports = CustomerBooksService;