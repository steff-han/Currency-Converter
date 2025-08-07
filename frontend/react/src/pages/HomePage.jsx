import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ExpenseTable from "../components/ExpenseTable";

function HomePage(){

    const [expenses, setExpenses] = useState([]);

    const navigate = useNavigate();

    // Call the backend (REST API) and await a JSON response containing our expenses data from MongoDB
    const loadExpenses = async () => {
        // Fetch the MongoDB data from URL (GET /expenses)
        const response = await fetch('/expenses');
        
        // Retrieve the data from the JSON in the HTTP response 
        const data = await response.json();

        setExpenses(data);
    }

    // Load our expenses table upon entering the page 
    useEffect( () => {
        loadExpenses();
    }, []);

    return (
        <div className="homepage">
            <h2> Expense Table </h2>
            <ExpenseTable expenseData={expenses} />
        </div>
    )

}

export default HomePage;