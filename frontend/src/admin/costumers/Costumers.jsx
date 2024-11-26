import React, { useEffect, useState } from "react";
import { Row } from "./Row";
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export const Costumers = () => {
  const [customers, setCustomers] = useState([]);
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  function getFirstTenCharacters(str) {
    if (typeof str !== 'string') {
      throw new Error("Input must be a string");
    }
    return str.slice(0, 10);
  }
  
  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:5000/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCustomers(data))
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center items-start lg:items-center">
      <div
        id="right"
        className="w-full  h-screen lg:h-screen select-none  bg-gray-200 lg:border-2   lg:border-b-solid lg:border-gray-300"
      >
        <div className="flex items-center justify-center pt-5 pb-5 w-full border-b-2 sticky overflow-x-auto overflow-y-auto border-slate-400 ">
          <p className="w-1/3 font-bold flex items-center justify-center">USERNAME</p>
          <p className="w-1/3 font-bold flex items-center justify-center">EMAIL</p>
          <p className="w-1/3 font-bold flex items-center justify-center">DATE</p>
        </div>

        <div id="rows" className="flex flex-col w-full overflow-y-auto overflow-x-auto">
          {customers.map((customer) => (
            <Row 
              key={customer._id}
              username={customer.Name}
              email={customer.Email}
              date={getFirstTenCharacters(customer.Date)}
            
            />
          ))}
        </div>
      </div>
    </div>
  );
};
