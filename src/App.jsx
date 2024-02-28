import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <p>TIRO</p>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
