import React, { useEffect, useState } from "react";
import { Row } from "./Row";

import pic from "/nothing.webp";

export const Costumers = () => {
  const [customers, setCustomers] = useState([]);
  const [user, setUser] = useState();

  const [test, setTest] = useState(true);
  function getImageUrl(costumer) {
    return costumer._id + ".jpg";
  }
  function getFirstTenCharacters(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string");
    }
    return str.slice(0, 10);
  }

  // Fetch customers data from the backend
  useEffect(() => {
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

  // Handle screen resize for responsiveness

  const handleClick = (user) => {
    setTest(!test);

    setUser(user);
  };
  const handleRoleChange = (newRole) => {
    if (!user) return;

    const updatedUser = { ...user, Role: newRole };
    setUser(updatedUser);

    // Update role in the backend
    fetch(`http://localhost:5000/api/users/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Role: newRole }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update user role");
        }
        // Update the customers list with the new role
        setCustomers((prevCustomers) =>
          prevCustomers.map((customer) =>
            customer._id === user._id ? updatedUser : customer
          )
        );
      })
      .catch((error) => console.error("Error updating role:", error));
  };
  return (
    <div className="flex flex-col lg:flex-row w-full justify-center items-start lg:items-center">
      <div
        id="right"
        className="w-full h-screen overflow-auto lg:overflow-hidden  select-none bg-gray-200 lg:border-2 lg:border-b-solid lg:border-gray-300"
      >
        
        {test ? (
          customers.length > 0 ? (
            <div className="w-full flex flex-row items-center justify-center bg-gray-300 h-10 cursor-pointer border-b-2 border-slate-600">
              <p className="w-1/4 flex items-center justify-center font-bold">
                First name
              </p>
              <p className="w-1/4 flex items-center justify-center font-bold">
                Last name
              </p>
              <p className="w-1/4 flex items-center justify-center font-bold">
                Email
              </p>
              <p className="w-1/4 flex items-center justify-center font-bold">
                Register date
              </p>
            </div>
          ) : (
            <p className="text-center text-gray-500">No customers available.</p>
          )
        ) : null}
        {test ? (
          customers.length > 0 ? (
            customers.map((customer) => (
              <Row
                key={customer._id}
                Firstname={customer.FirstName}
                Lastname={customer.LastName}
                email={customer.Email}
                date={getFirstTenCharacters(customer.Date)}
                onClick={() => handleClick(customer)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No customers available.</p>
          )
        ) : (
          customers.length > 0 && (
            <div className="flex flex-col lg:flex-row items-center justify-start gap-4 p-8">
              <div className="w-1/2 lg:h-screen flex flex-col items-center ">
                <img
                  src={getImageUrl(user) || pic}
                  className="h-56 lg:w-2/5 mt-20  lg:h-60 object-cover rounded-md lg:mb-8 lg:mt-20"
                  alt="Customer"
                />
                <div className="flex flex-row justify-start gap-3 mt-4 items-center">
                  <p className="font-bold lg:ml-4">First Name:</p>
                  <p>{user.FirstName || "N/A"}</p>
                </div>
                <div className="flex flex-row justify-start gap-3 mt-4 items-center">
                  <p className="font-bold lg:ml-4">Last Name:</p>
                  <p>{user.LastName || "N/A"}</p>
                </div>

                <button
                  className="btn btn-primary mt-11 lg:mt-20 lg:mr-72"
                  onClick={() => setTest(!test)}
                >
                  Back
                </button>
              </div>
              <div className="hidden lg:flex divider lg:divider-horizontal"></div>
              <div className=" w-full lg:w-1/2 h-screen lg:pt-16  lg:h-screen flex flex-col justify-start mt-20 lg:mt-0 items-start">
                <div className="flex flex-row justify-start gap-3 mt-4 items-center">
                  <p className="font-bold lg:ml-4">Email:</p>
                  <p>{user.Email || "N/A"}</p>
                </div>
                <div className="flex flex-row justify-start gap-3 mt-4 items-center">
                  <p className="font-bold lg:ml-4">Phone:</p>
                  <p>{user.Phone || "N/A"}</p>
                </div>
                <div className="flex flex-col justify-start gap-3 mt-4 items-center">
                  <p className="font-bold lg:ml-4 underline">Address:</p>
                </div>
                <div className="flex flex-col justify-center gap-3 mt-4 ml-4">
                  <p className="font-bold lg:ml-4 ">
                    *Street:{" "}
                    <span className="ml-2 font-normal">
                      {user?.Adress?.Street || "N/A"}
                    </span>
                  </p>
                  <p className="font-bold lg:ml-4 ">
                    *City:{" "}
                    <span className="ml-2 font-normal">
                      {user?.Adress?.City || "N/A"}
                    </span>
                  </p>
                  <p className="font-bold lg:ml-4 ">
                    *Postal Code:{" "}
                    <span className="ml-2 font-normal">
                      {user?.Adress?.PostalCode || "N/A"}
                    </span>
                  </p>
                </div>
                <div className="flex flex-row justify-start gap-3 mt-4 items-start">
                  <p className="font-bold lg:ml-4">Register Date:</p>
                  <p>{getFirstTenCharacters(user.Date) || "N/A"}</p>
                </div>
                <div className=" flex justify-center items-center w-full">
                  <h1 className="text-2xl font-bold text-blue-400 mt-8 mb-8">
                    Access and Roles
                  </h1>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text w-24 font-bold">Admin</span>
                    <input
                        type="radio"
                        name="role"
                        className="radio checked:bg-red-500"
                        checked={user.Role === "Admin"}
                        onChange={() => handleRoleChange("Admin")}
                      />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text w-24 font-bold">Normal User</span>
                    <input
                        type="radio"
                        name="role"
                        className="radio checked:bg-blue-500"
                        checked={user.Role === "Normal User"}
                        onChange={() => handleRoleChange("Normal User")}
                      />
                  </label>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
