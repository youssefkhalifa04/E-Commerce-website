// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cart } from './shoppingBasket/Cart';
import { Home } from './Home/Home';
import { Admin } from './admin/Admin';
import { Login } from './Login/Login';  // Make sure Login is properly imported from './Login/Login'
import {Signup} from './Login/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />  {/* Ensure that path case matches */}
        <Route path="/signup" element={<Signup />} />  {/* Ensure that path case matches */}
      </Routes>
    </Router>
  );
}

export default App;
