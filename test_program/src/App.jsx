import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter, Link } from 'react-router-dom'
import ExpenseTable from './components/ExpenseTable'
import ConvertCurrency from './components/ConvertCurrency'

function App() {

  // Set our array of expenses as empty initially
  const [expenses, setExpenses] = useState([]);

  // Get our expenses data from MongoDB
  const loadExpenses = async () => {

    try {
      const response = await fetch('/expenses');

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
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExpenseTable expenseData={expenses} loadExpenses={loadExpenses} />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
