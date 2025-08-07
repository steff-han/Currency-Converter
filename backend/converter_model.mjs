
import mongoose from 'mongoose';
import 'dotenv/config';

const EXPENSE_DB_NAME = 'ExpenseDB';
const EXPENSE_CLASS = 'expense';

let connection = undefined;

/**
 * This function connects to the MongoDB server and to the database
 *  'expense_db' in that server.
 */
async function connect(){
    try{
        connection = await mongoose.connect(process.env.MONGODB_CONNECT_TEST, 
            {dbName: EXPENSE_DB_NAME});
        console.log("Successfully connected to MongoDB using Mongoose!");
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

/**
 * Define the class schema 
 */
const expenseSchema = mongoose.Schema({
    date: {type: String, required: true},
    name: {type: String, required: true},
    category: {type: String, required: true},
    amount: {type: Number, required: true},
    zipCode: {type: Number, required: true},
    email: {type: String, required: true},
});

/**
 * MODEL: Compile the model from the schema 
 */
const Expense = mongoose.model(EXPENSE_CLASS, expenseSchema);

/**
 * Finds expenses according to queries 
 * @param {*} filter 
 * @returns All entries in the MongoDB Collection 
 */
const findExpenses = async (filter) => {
    // Call find() to return a query object
    const query = Expense.find(filter);
    return query.exec();
}

/**
 *  Given that the amount is in USD initially, it will convert to MXN. 
 *  This feature may expand to other currencies in the future.
 * @param {*} id 
 * @param {*} amount 
 * @returns MXN Currency Amount
 */
const convertExpenses = async () => {

    // USD:MXN Exchange Rate is $1.00 = 18.62 pesos
    const convertMXN = (oldAmount) => (oldAmount * 18.62);

    // Awiat a promise to return an array of all entry objects in the database 
    const allExpenses = await Expense.find({});

    // // Change ALL entries (empty condition) by the amount query and according to currency. Will return the updated array of entries
    allExpenses.map(expense => {
        expense.amount = convertMXN(expense.amount);
        return expense.save();
    });

    return allExpenses;
}

export { connect, findExpenses, convertExpenses };