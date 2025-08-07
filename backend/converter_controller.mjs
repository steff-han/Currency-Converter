
import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import asyncHandler from 'express-async-handler'
import * as expenses from './converter_model.mjs'

const PORT = process.env.port;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, async () => {
    await expenses.connect();
    console.log(`Server listening on port ${PORT}...`);
});

const ERROR_404 = { error : 'Not Found'};
const ERROR_400 = { error : 'Invalid Request'};
const ERROR_500 = { error: 'Server Error'};

/** Read all expenses using GET /expenses 
 * 
 */
app.get('/expenses', asyncHandler(async (req, res) => {
    try {
        const allExpenses = await expenses.findExpenses(req.query);
        res.status(200).json(allExpenses);
    } catch (err){
        res.status(500).json(ERROR_505);
    };
}))

/** Convert all expense amounts using POST /convert
 * 
 */
// app.post('/convert', asyncHandler(async (req, res) => {

// }))
