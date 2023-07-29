const { models } = require('../libs/sequelize');

class CustomerInterestsService { 
  
    constructor() {}

    async find() {
      const res = await models.CustomerInterest.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.CustomerInterest.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.CustomerInterest.bulkCreate(data);
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
  
  module.exports = CustomerInterestsService;