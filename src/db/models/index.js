const { Customer, CustomerSchema } = require('./customers.model');
const { Room, RoomSchema } = require('./rooms.model');
const { PersonalInterest, PersonalInterestSchema } = require('./personalInterests.model');
const { CustomerInterest, CustomerInterestSchema } = require('./customerInterests.model');
const { Place, PlaceSchema } = require('./places.model');
const { CustomerPlace, CustomerPlaceSchema } = require('./customerPlaces.model');
const { Income, IncomeSchema } = require('./incomes.model');
const { Travel, TravelSchema } = require('./travels.model');
const { Book, BookSchema } = require('./books.model');
const { CustomerBook, CustomerBookSchema } = require('./customerBooks.model');
const { relationship } = require('./relationships/relationship');

function setupModels(sequelize) {
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Room.init(RoomSchema, Room.config(sequelize));
    PersonalInterest.init(PersonalInterestSchema, PersonalInterest.config(sequelize));
    CustomerInterest.init(CustomerInterestSchema, CustomerInterest.config(sequelize));
    Place.init(PlaceSchema, Place.config(sequelize));
    CustomerPlace.init(CustomerPlaceSchema, CustomerPlace.config(sequelize));
    Income.init(IncomeSchema, Income.config(sequelize));
    Travel.init(TravelSchema, Travel.config(sequelize));
    Book.init(BookSchema, Book.config(sequelize));
    CustomerBook.init(CustomerBookSchema, CustomerBook.config(sequelize));
    relationship(Customer, Room, PersonalInterest, CustomerInterest, Place, CustomerPlace, Income, Travel, Book, CustomerBook);
}

module.exports = setupModels;