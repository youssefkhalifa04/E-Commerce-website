
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Cart} from './shoppingBasket/Cart'
import {Home} from './Home/Home';
import { Admin } from './admin/Admin';

function App(){
    return(
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
      
      
            
          
      
    
    );


}

export default App;
