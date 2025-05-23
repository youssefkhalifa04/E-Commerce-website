
import React from 'react';
import { useContext, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cart } from './components/shoppingBasket/Cart.jsx';
import { Home } from './components/Home/Home.jsx';
import { Admin } from './admin/Panel/Admin.jsx';
import { Login } from './components/Login/Login.jsx';  // Make sure Login is properly imported from './Login/Login'
import {Signup} from './components/Login/Signup.jsx';
import { ThemeProvider } from './components/header/ThemeContext.jsx'; // Adjust the path accordingly
import { ThemeController } from './components/header/ThemeController.jsx';
import {About} from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx';
import  Collection  from './components/Collection.jsx';
import { Settings } from './components/header/settings/Settings.jsx';
export const Context = React.createContext();
function App() {
  const [user , setUser] = useState("");
  return (
    <ThemeProvider>
      <Context.Provider value={[user , setUser]}> 
      <Router>
        <ThemeController />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/collection" element={<Collection />} /> 
        </Routes>
      </Router>
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;
