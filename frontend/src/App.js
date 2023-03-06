import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home'
import Ally from './components/Ally'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/ally" element={<Ally />} />
        </Routes>
      </Router>
    </div>
  );
 }
  
 export default App;