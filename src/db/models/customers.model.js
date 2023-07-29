const { Model, DataTypes, Sequelize } = require('sequelize');

const CUSTOMER_TABLE = 'customers';

class Customer extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CUSTOMER_TABLE,
            modelName: 'Customer',
            timestamps: true,
        }
    }
} 

const CustomerSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field:'customer_id'
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'name',
        validate: {
            notNull: true,
            len: [10, 255]
        }
    },
    age: { 
        allowNull:false,
        type: DataTypes.INTEGER,
        field: 'age',
        min:18,
        max: 100,
        validate: {
            min: 18,
            max: 100
        }
    },
    gender: { 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'gender',
        validate: {
            notNull: true,
            len: [1, 20]
        }
    },
    address: { 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'address',
        validate: {
            notNull: true,
            len: [20, 255]
        }
    }
}

module.exports = { Customer, CustomerSchema };