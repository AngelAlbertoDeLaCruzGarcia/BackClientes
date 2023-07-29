const { Model, DataTypes, Sequelize } = require('sequelize');

const CUSTOMERBOOK_TABLE = 'customer_books';

class CustomerBook extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CUSTOMERBOOK_TABLE,
            modelName: 'CustomerBook',
            timestamps: true
        }
    }
} 

const CustomerBookSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field:'customer_book_id'
    }
}

module.exports = { CustomerBook, CustomerBookSchema };