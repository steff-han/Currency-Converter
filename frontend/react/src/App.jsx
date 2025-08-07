import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';

function App() {

  return (
    <div>
      <header> <b> Currency Converter </b> </header>

        <Router> 
        <Navigation />
          <Routes> 
              <Route path="/" element={<HomePage />}/>
          </Routes>
        </Router>
  
    </div>
  )
}

export default App;
