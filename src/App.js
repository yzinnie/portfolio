import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Img from './pages/Img';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/img" element={<Img />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
