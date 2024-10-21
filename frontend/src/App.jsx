
import React from 'react';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cart } from './components/shoppingBasket/Cart.jsx';
import { Home } from './components/Home/Home.jsx';
import { Admin } from './admin/Panel/Admin.jsx';
import { Login } from './components/Login/Login.jsx';  // Make sure Login is properly imported from './Login/Login'
import {Signup} from './components/Login/Signup.jsx';
import { ThemeProvider } from './components/header/ThemeContext.jsx'; // Adjust the path accordingly
import { ThemeController } from './components/header/ThemeController.jsx';
import {About} from './components/about/About.jsx'
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
          <Route path="/about" element={<About />} /> 
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
