const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSONALINTEREST_TABLE = 'personal_interests';

class PersonalInterest extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSONALINTEREST_TABLE,
            modelName: 'PersonalInterest',
            timestamps: true
        }
    }
} 

const PersonalInterestSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field:'personal_interest_id'
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'description'
    }
}

module.exports = { PersonalInterest, PersonalInterestSchema };