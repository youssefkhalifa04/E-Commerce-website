import React from "react";
import pic from "../../assets/contact.png";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 bg-base-200">
      <h1 className="text-gray-500 font-bold text-2xl">CONTACT US </h1>

      {/* Flex container for image and text */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-6xl mx-auto mt-10 mb-10 lg:space-x-10">
        {/* Image */}
        <img
          className="w-40 lg:w-1/3 h-auto object-cover rounded-lg ml-60"
          src={pic}
          alt="Contact Us"
        />

        {/* Contact Details */}
        <div className="w-full lg:w-1/2 text-gray-700 mt-10 lg:mt-0">
          <p className="font-semibold text-gray-800">Our Store</p>
          <p className="text-gray-500">
             <br />54709 Willms Station<br /> <br /> Suite 350, Washington, USA <br /> <br />
            Tel: (415) 555-0132 <br />  
            
             <br />
            Email: admin@forever.com
          </p>
          <p className="font-semibold text-gray-800 mt-6">Careers at Forever <br /></p>
          <p className="text-gray-500"> <br />Learn more about our teams and job openings. </p>
        </div>
      </div>

      {/* Header and Footer */}
      <Header />
      <Footer />
    </div>
  );
};

export default Contact;

