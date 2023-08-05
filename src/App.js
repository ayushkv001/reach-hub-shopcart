import React from 'react';
import {  Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Card from './pages/Card';
import Header from './component/Header';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <HashRouter>
        <Header/>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<Card/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
