const { Model, DataTypes, Sequelize } = require('sequelize');

const BOOK_TABLE = 'books';

class Book extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: BOOK_TABLE,
            modelName: 'Book',
            timestamps: true,
        }
    }
} 

const BookSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field:'book_id'
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'description',
        length: 50
    }
}
 
module.exports = { Book, BookSchema };