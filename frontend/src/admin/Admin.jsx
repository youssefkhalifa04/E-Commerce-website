import React, { useState, useEffect } from "react";
import { SideBar } from "../sideBar/SideBar";
import { TopHeader } from "../topheader/Topheader";
import { Products } from "./Products";
import { Header } from "../header/Header";
import { AddPrPage } from "./AddPrPage";
import './admin.css';

export const Admin = () => {
  const [title, setTitle] = useState("Dashboard");
  const [action, setAction] = useState("");
  const [showProducts, setShowProducts] = useState(true);
  const [productList, setProductList] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleAction = (actionType) => {
    setAction(actionType);
    if (actionType === "showAddPage") {
      setShowProducts(false); // Show Add Product page
    }
  };

  const handleMessage2 = (message) => {
    if (message.type === "close") {
      setShowProducts(true); // Show Products list again
      setAction(""); // Reset action
    } else if (message.type === "confirm") {
      const productDetails = message.data;
      setProductList((prevList) => [...prevList, productDetails]);
      setShowProducts(true); // Show Products after adding
      setAction(""); // Reset action
      handleConfirm(); // Show confirmation
    }
  };

  const handleSideBarClick = (message, newTitle) => {
    setTitle(newTitle); // Update the title
    console.log("Updated Title:", newTitle);

    // Determine what to show based on the new title
    if (newTitle === "Dashboard") {
      setShowProducts(true); // Show products when in Dashboard
      setAction(""); // Reset action
    } else if (newTitle === "Products") {
      setShowProducts(true); // Show products view
      setAction(""); // Reset action
    } else {
      setShowProducts(false); // For other titles, hide products
    }
  };

  const currentComponent = () => {
    if (action === "showAddPage") {
      return <AddPrPage onSendMessage2={handleMessage2} />;
    }

    if (showProducts && title === "Products") {
      return <Products onAddPr={handleAction} addedList={productList} />;
    }

    return <div>Welcome to the {title}</div>; // Default content
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      setIsConfirmed(false);
    }, 2500);
  };

  return (
    <section className="flex justify-center items-center h-full w-full">
      <div className="h-5/6 flex justify-center items-center w-11/12 mt-14">
        <div id="hello" className='side-bar w-1/6 flex flex-col justify-start border-2 rounded-l-xl border-l-slate-600 border-t-slate-600 border-b-slate-600 h-full pt-16 select-none'>
          <SideBar onSendMessage={handleSideBarClick} />
        </div>
        <Header />
        <div id="container" className="h-full rounded-r-xl w-5/6 border-2 border-slate-600">
          <TopHeader onSendMessage={handleSideBarClick} PageTitle={title} />
          {currentComponent()} {/* Render the current component based on the state */}
          {isConfirmed && (
            <div role="alert" className="alert alert-success w-2/3 mt-4 fixed top-0 left-72 z-50">
              <span>The product has been added successfully</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
