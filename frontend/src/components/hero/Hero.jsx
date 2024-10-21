import React from 'react';
import img1 from "../../assets/hero.svg.jpg"; // Adjust the path as necessary

export const Hero = () => {
  return (
    <div className="hero min-h-screen flex items-center justify-center bg-gray-100">
      <div className="cadre p-24 shadow-lg rounded-lg flex items-center space-x-20 bg-transparente">
        {/* Left-side text */}
        <div className="hero-text">
          <h3 className="text-2xl ">----- OUR BESTSELLERS</h3>
          <h1 className="text-5xl font-extrabold tracking-wide text-center p-6 b rounded-lg ">Latest Arrivals</h1>
          <h3 className="text-2xl "> SHOP NOW------</h3>
        </div>
        
        {/* Right-side image */}
        <div className="hero-image">
          <img src={img1} alt="Hero" className="max-w-md" />
        </div>
      </div>
    </div>
  );
};
