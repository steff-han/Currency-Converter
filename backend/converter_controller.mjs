
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

/** Read all expenses using GET /expenses 
 */
app.get('/expenses', asyncHandler(async (req, res) => {
    const allExpenses = await expenses.findExpenses({});
    res.status(200).json(allExpenses);
}));

/** Convert all expense amounts from USD to MXN using PUT /expenses
 */
app.put('/convert', asyncHandler(async (req, res) => {
    const allExpenses = req.body;
    console.log(allExpenses);

    const convertedExpenses = await expenses.convertExpenses(allExpenses);

    if (!convertedExpenses){
        return res.status(404).json(ERROR_404);
    }

    res.status(200).json(convertedExpenses);
}));