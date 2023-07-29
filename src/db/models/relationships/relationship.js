function relationship(Customer, Room, PersonalInterest, CustomerInterest, Place, CustomerPlace, Income, Travel, Book, CustomerBook) {
    Customer.belongsTo(Room, { targetKey: 'id', foreignKey: 'room_id' });
    Customer.belongsTo(Income, { targetKey: 'id', foreignKey: 'income_id' });
    Customer.belongsTo(Travel, { targetKey: 'id', foreignKey: 'travel_id' });
    Customer.belongsToMany(PersonalInterest, {as: 'interests', through: CustomerInterest, foreignKey: 'customer_id', otherKey: 'personal_interest_id'});
    Customer.belongsToMany(Place, {as: 'places', through: CustomerPlace, foreignKey: 'customer_id', otherKey: 'place_id'});
    Customer.belongsToMany(Book, {as: 'books', through: CustomerBook,  foreignKey: 'customer_id', otherKey: 'book_id' });
}

module.exports = { relationship };