import { useState, useEffect } from 'react'
import './App.css'

import ExpenseTable from './components/ExpenseTable'
import ConvertCurrency from './components/ConvertCurrency'

function App() {

  // Set our array of expenses as empty initially
  const [expenses, setExpenses] = useState([]);

  // Get our expenses data from MongoDB
  const loadExpenses = async () => {

    try {
      const response = await fetch('/convert');

      // DEBUGGING: Check the HTTP status (should be 200) and if not, print error in console
      // if (!response.ok){
      //   const errorText = await response.text();
      //   throw new Error(`HTTP ${response.status} and message: ${errorText}`);
      // }

      const data = await response.json();
      setExpenses(data);
    
    } catch (err){
      console.error('Failed to load expenses:', err.message);
    }
  }

  useEffect( () => {
    loadExpenses();
  }, []);

  return (
    <>
      <h1>Test Program</h1>

      <ConvertCurrency expenseData={expenses} />

      <ExpenseTable expenseData={expenses} />
     
    </>
  )
}

export default App;
