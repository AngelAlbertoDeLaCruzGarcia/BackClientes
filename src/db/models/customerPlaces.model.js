const { Model, DataTypes, Sequelize } = require('sequelize');

const CUSTOMERPLACE_TABLE = 'customer_places';

class CustomerPlace extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CUSTOMERPLACE_TABLE,
            modelName: 'CustomerPlace',
            timestamps: true
        }
    }
} 

const CustomerPlaceSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field:'customer_place_id'
    }
}

module.exports = { CustomerPlace, CustomerPlaceSchema };