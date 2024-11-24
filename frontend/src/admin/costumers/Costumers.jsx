import React, { useEffect, useState } from "react";
import { Row } from "./Row";


const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export const Costumers = () => {
  const [customers, setCustomers] = useState([]);
  const [isScreenSmall, setIsScreenSmall] = useState(false); 

  
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCustomers(data);
      })
      .catch((error) => {
        console.error("Error fetching customers:", error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 1024); 
      setIsScreenSmall(window.innerWidth < 1024); 
    };

    handleResize(); 
    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); 
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center lg:mt-16 items-start lg:items-center">
      <div
        id="right"
        className="w-full lg:w-2/3 h-96 lg:p-8 bg-gray-200 lg:border-2 lg:ml-2 lg:rounded-xl lg:border-solid lg:border-gray-300"
      >
        
        <div className="flex items-center justify-center w-full border-b-2 sticky overflow-x-auto overflow-y-auto border-slate-400 pb-2">
          <p className="w-1/3 font-bold flex items-center justify-center">USERNAME</p>
          <p className="w-1/3 font-bold flex items-center justify-center">EMAIL</p>
          <p className="w-1/3 font-bold flex items-center justify-center">HASHED PASSWORD</p>
        </div>

        
        <div id="rows" className="flex flex-col w-full overflow-y-auto overflow-x-auto">
          {customers.map((customer) => (
            <Row
              key={customer._id}
              username={isScreenSmall ? truncateText(customer.Name, 15) : customer.Name}
              email={isScreenSmall ? truncateText(customer.Email, 15) : customer.Email}
              hashedPassword={isScreenSmall ? truncateText(customer.Password, 15) : customer.Password}
            />
          ))}
        </div>
      </div>

      
      <div className="divider lg:divider-horizontal hidden lg:flex "></div>
      <div id="left" className="w-1/3 h-96">
       
        <h2 className="font-bold">* Address</h2>
        <div className="lineView flex flex-row gap-2 items-center justify-start">
          <h4> &nbsp;&nbsp;&nbsp;Street :</h4>
          <h4>value</h4>
        </div>
        <div className="lineView flex flex-row gap-2 items-center justify-start">
          <h4>&nbsp;&nbsp;&nbsp;Postal Code:</h4>
          <h4>value</h4>
        </div>
        <div className="lineView flex flex-row gap-2 items-center justify-start">
          <h4>&nbsp;&nbsp;&nbsp;City :</h4>
          <h4>value</h4>
        </div>
        <div className="lineView flex flex-row gap-2 items-center justify-start">
          <h4>&nbsp;&nbsp;&nbsp;Country :</h4>
          <h4>value</h4>
        </div>
        <div className="flex gap-2"><h2 className="font-bold">* Is Admin : </h2>
        <h4>yes/no</h4></div>
        <h2 className="font-bold">* Activity</h2>
        <div className="lineView flex flex-row gap-2 items-center justify-start">
          <h4>&nbsp;&nbsp;&nbsp;Total deals :</h4>
          <h4>value</h4>
        </div>
        <div className="lineView flex flex-row gap-2 items-center justify-start">
          <h4>&nbsp;&nbsp;&nbsp;Client since :</h4>
          <h4>value</h4>
        </div>
      </div>
    </div>
  );
};