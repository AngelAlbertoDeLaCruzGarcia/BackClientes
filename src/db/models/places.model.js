const { Model, DataTypes, Sequelize } = require('sequelize');

const PLACES_TABLE = 'places';

class Place extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PLACES_TABLE,
            modelName: 'Place',
            timestamps: true,
        }
    }
} 

const PlaceSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field:'place_id'
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'description'
    }
}
 
module.exports = { Place, PlaceSchema };