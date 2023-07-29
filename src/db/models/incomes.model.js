const { Model, DataTypes, Sequelize } = require('sequelize');

const INCOME_TABLE = 'incomes';

class Income extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: INCOME_TABLE,
            modelName: 'Income',
            timestamps: true
        }
    }
} 

const IncomeSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field:'income_id'
    },
    incomeMin: {
        allowNull: false,
        type: DataTypes.DECIMAL,
        field:'income_min',
        min:0,
        decimals:2,
        length:20
    },
    incomeMax: {
        allowNull: false,
        type: DataTypes.DECIMAL,
        field:'income_max',
        min:1,
        decimals:2,
        length:20
    }
}

module.exports = { Income, IncomeSchema };