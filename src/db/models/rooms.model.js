const { Model, DataTypes, Sequelize } = require('sequelize');

const ROOM_TABLE = 'rooms';

class Room extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: ROOM_TABLE,
            modelName: 'Room',
            timestamps: true
        }
    }
} 

const RoomSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field:'room_id'
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'description'
    }
}

module.exports = { Room, RoomSchema };