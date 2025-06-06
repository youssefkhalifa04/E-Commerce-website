import React from "react";
import about from "../../assets/about.png";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  py-20 bg-base-200">
      <Header />
      <h1 className="text-2xl font-bold text-gray-500 mt-8">ABOUT US</h1>
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto mt-10 mb-10">
        <img
          className="w-auto lg:w-1/3 h-auto object-cover rounded-lg mb-10 mt-10 "
          src={about}
          alt="About Us"
        />
        <div className="w-64 h-auto lg:w-1/2 lg:pl-10 text-gray-700 mt-12 lg:mt-0  mb-10 mr-40">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes. <br /> Since our inception, we've worked
            tirelessly to curate a diverse selection of high-quality products
            that cater to every taste and preference.From fashion and beauty to
            electronics and home essentials, we offer an extensive collection
            sourced from trusted brands and suppliers. <br />{" "}
            <p className="text-lg font-semibold mt-4">Our Mission:</p> <br />{" "}
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <h1 className="font-blond col-gray-600 text-2xl mb-20 ">
        WHY CHOOOSE US
      </h1>
      <table className="border-collapse border border-gray-300 mb-20 ml-20 mr-20" style={{ width: "900px", height: "250px" }}>


        <tr>
          <td className="border border-gray-500 px-4 py-2 font-bold">
            Quality Assurance:
            <p className="font-semibold text-gray-500">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </td>
          <td className="border border-gray-500 px-4 py-2 font-bold">
            Convenience:
            <p className="font-semibold text-gray-500">
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </td>
          <td className="border border-gray-500 px-4 py-2 font-bold">
            Exceptional Customer Service:
            <p className="font-semibold text-gray-500">
              Our team of dedicated professionals is here to assist you,
              ensuring your satisfaction is our top priority.
            </p>
          </td>
        </tr>
      </table>
      <Footer />
    </div>
    
  );
};
