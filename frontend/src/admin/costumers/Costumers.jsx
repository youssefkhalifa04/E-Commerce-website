import React, { useEffect, useState } from "react";

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export const Costumers = () => {
  const [customers, setCustomers] = useState([]);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

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
    <div className="flex flex-col lg:flex-row w-full justify-center lg:mt-16 items-start lg:items-center">
      <div
        id="right"
        className="w-full lg:w-2/3 h-96 lg:p-8 bg-gray-200 lg:border-2 lg:ml-2 lg:rounded-xl lg:border-solid lg:border-gray-300"
      >
        <div className="flex items-center justify-center w-full border-b-2 sticky overflow-x-auto overflow-y-auto border-slate-400 pb-2">
          <p className="w-1/3 font-bold flex items-center justify-center">USERNAME</p>
          <p className="w-1/3 font-bold flex items-center justify-center">EMAIL</p>
          <p className="w-1/3 font-bold flex items-center justify-center">PASSWORD</p>
        </div>

        <div id="rows" className="flex flex-col w-full overflow-y-auto overflow-x-auto">
          {customers.map((customer) => (
            <div key={customer._id} className="flex items-center justify-around">
              <p className="w-1/3 text-center">
                {isScreenSmall ? truncateText(customer.Name, 15) : customer.Name}
              </p>
              <p className="w-1/3 text-center">
                {isScreenSmall ? truncateText(customer.Email, 15) : customer.Email}
              </p>
              <p className="w-1/3 text-center">
                {isScreenSmall ? truncateText(customer.Password, 15) : customer.Password}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
