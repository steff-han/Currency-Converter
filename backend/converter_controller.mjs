
import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import asyncHandler from 'express-async-handler'
import * as expenses from './converter_model.mjs'

const PORT = process.env.port;
const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, async () => {
    await expenses.connect();
    console.log(`Server listening on port ${PORT}...`);
});

const ERROR_404 = { error : 'Not Found'};
const ERROR_400 = { error : 'Invalid Request'};
const ERROR_500 = { error: 'Server Error'};

/** Read all expenses using GET /expenses 
 *  (NOTE: Feel free to delete this as it was a test to connect to MongoDB)
 */
app.get('/convert', asyncHandler(async (req, res) => {
    const allExpenses = await expenses.findExpenses(req.query);
    res.status(200).json(allExpenses);
}));

/** Convert all expense amounts from USD to MXN using PUT /expenses
 */
app.put('/convert', asyncHandler(async (req, res) => {

    const allExpenses = req.body;

    const convertedExpenses = await expenses.convertExpenses(allExpenses);

    if (!convertedExpenses){
        return res.status(404).json(ERROR_404);
    }

    res.status(200).json(convertedExpenses);
}));
