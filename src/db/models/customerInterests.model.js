const { Model, DataTypes, Sequelize } = require('sequelize');

const CUSTOMER_INTEREST_TABLE = 'customer_interests';

class CustomerInterest extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CUSTOMER_INTEREST_TABLE,
            modelName: 'CustomerInterest',
            timestamps: true,
        }
    }
} 

const CustomerInterestSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field:'customer_interest_id'
    },
}
 
module.exports = { CustomerInterest, CustomerInterestSchema };