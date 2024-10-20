import React from "react";
import about from "../src/assets/about.png"

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-20 ">
      <h1 className="text-2xl font bold text-gray-500 mb-8">ABOUT US</h1>
      <div className="flex flex-col lg:flex-row itmes-center justify-between maw-w-6xl mx-auto" >
       <img className="w-full lg:w-1/2 h-auto object-cover rounded-lg" src={about} alt="" />
       <div className="lg:w-1/2 lg:pl-10 text-gray-700 mt-6 lg:mt-0">
          <p className="text-lg leading-relaxed">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes. Since our inception, we've worked tirelessly
            to curate a diverse selection of high-quality products that cater to
            every taste and preference.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            From fashion and beauty to electronics and home essentials, we offer
            an extensive collection sourced from trusted brands and suppliers.
            Our Mission: Our mission at Forever is to empower customers with
            choice, convenience, and confidence. We're dedicated to providing a
            seamless shopping experience that exceeds expectations, from
            browsing and ordering to delivery and beyond.
          </p>
          <p className="text-lg font-semibold mt-4">WHY CHOOSE US</p>
        </div>
      </div>
    </div>
  );
};

export default About;
