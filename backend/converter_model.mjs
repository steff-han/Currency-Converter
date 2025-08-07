
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
 * Compie the model from the schema 
 */
const Expense = mongoose.model(EXPENSE_CLASS, expenseSchema);


/**
 * Finds expenses according to queries 
 * @param {*} filter 
 * @returns 
 */
const findExpenses = async (filter) => {
    const query = Expense.find(filter);
    return query.exec();
}



/**
 * 
 * @param {*} id 
 * @param {*} amount 
 * @returns Given that the amount is in USD initially, it will convert to the selected currency amount. 
 */
const convertExpense = async (id, selectedCurrency) => {

    // Find the expense entry in MongoDB 
    const query = await Expense.findById(id);

    console.log(query);

    if (selectedCurrency === "USD"){ 

    }

    if (selectedCurrency === "EUR"){

    }

    if (selectedCurrency === "GBP"){

    }

    if (selectedCurrency === "JPY"){

    }

    if (selectedCurrency === "CAD"){

    }

    if (selectedCurrency === "MXN"){

    }
    
    return query.exec();
}

export { connect, findExpenses, convertExpense };