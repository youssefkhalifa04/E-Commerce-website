import React from 'react';
import img1 from "../assets/hero.svg.jpg"; // Adjust the path as necessary

export const Hero = () => {
  return (
    <div className="hero min-h-screen flex items-center justify-center bg-gray-100">
      <div className="cadre p-20 shadow-lg rounded-lg flex items-center space-x-20 bg-transparente">
        {/* Left-side text */}
        <div className="hero-text">
          <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
          <p className="mt-4 text-lg">Here is some information about our services...</p>
        </div>
        
        {/* Right-side image */}
        <div className="hero-image">
          <img src={img1} alt="Hero" className="max-w-md" />
        </div>
      </div>
    </div>
  );
};
