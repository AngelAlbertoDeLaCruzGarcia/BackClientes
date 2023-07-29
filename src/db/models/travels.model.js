const { Model, DataTypes, Sequelize } = require('sequelize');

const TRAVEL_TABLE = 'travels';

class Travel extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TRAVEL_TABLE,
            modelName: 'Travel',
            timestamps: true
        }
    }
} 

const TravelSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field:'travel_id'
    },
    timesMin: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field:'times_min',
        min: 1,
        max: 20
    },
    timesMax: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field:'times_max',
        min: 1,
        max: 20
    }
}

module.exports = { Travel, TravelSchema };