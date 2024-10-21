import React from "react";
import about from "../../assets/about.png";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const About = () => {
 
  return (
    
    <div className="h-full mt-60 flex flex-col items-center justify-center bg-gray-100 py-20 select-none">
      <Header/>
      <h1 className="text-2xl font-bold text-gray-500 mb-8 mt-8">ABOUT US</h1>
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto mt-10 mb-10">
        <img
          className="w-auto lg:w-1/2 h-auto object-cover rounded-lg mb-10 mt-10"
          src={about}
          alt="About Us"
        />
        <div className="w-64 h-auto lg:w-1/2 lg:pl-10 text-gray-700 mt-6 lg:mt-0 mt-10 mb-10">
          <p className="text-lg ">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes. <br /> Since our inception, we've worked tirelessly
            to curate a diverse selection of high-quality products that cater to
            every taste and preference.From fashion and beauty to electronics
            and home essentials, we offer an extensive collection sourced from
            trusted brands and suppliers. <br />  <p className="text-lg font-semibold mt-4">Our Mission:</p> <br /> Our mission at Forever is
            to empower customers with choice, convenience, and confidence. We're
            dedicated to providing a seamless shopping experience that exceeds
            expectations, from browsing and ordering to delivery and beyond.
          </p>

      
        </div>
      </div>
      
      <Footer/>
    </div>
  );
};


