import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./shoppingBasket/Cart";
import { Header } from "./header/Header";
import { Hero } from "./hero/Hero";
import { Footer } from "./footer/Footer";
import { Carousel } from "./Carousel/Carousel";
import { Login } from "./Login/Login";

function App() {
  return (
    <Router>
      {/* Header should be outside of Routes so it shows on all pages */}
      <Header /> 
      
      <Routes>
        {/* Define your homepage route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <section className="flex flex-col justify-center items-center pt-10">
                <h1 className="pb-10 text-3xl">Our latest Products</h1>
                <Carousel />
              </section>
              <Footer />
            </>
          }
        />
        
        {/* Define your login route */}
        <Route path="/login" element={<Login />} />
      </Routes>
      
      {/* Footer could also be here if you want it on every page */}
    </Router>
  );
}

export default App;
