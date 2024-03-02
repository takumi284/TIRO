import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Limbus from './Limbus';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header className='App-header'>
          <p>TIRO</p>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Limbus' element={<Limbus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
