
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cart } from './shoppingBasket/Cart';
import { Home } from './Home/Home';
import { Admin } from './admin/Admin';
import { Login } from './Login/Login';  // Make sure Login is properly imported from './Login/Login'
import {Signup} from './Login/Signup';
import { ThemeProvider } from './header/ThemeContext.jsx'; // Adjust the path accordingly
import { ThemeController } from './header/ThemeController';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeController />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
