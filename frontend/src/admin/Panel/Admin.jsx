import React, { useState, useEffect } from "react";
import { SideBar } from "../../components/sideBar/SideBar";
import { TopHeader } from "../../components/topheader/Topheader";
import { Products } from "../products/Products";
import { Header } from "../../components/header/Header";
import { AddPrPage } from "../add/AddPrPage";

import { Costumers } from "../costumers/Costumers";

export const Admin = () => {
  const [title, setTitle] = useState("Dashboard");
  const [action, setAction] = useState("");
  const [showProducts, setShowProducts] = useState(true);
  const [productList, setProductList] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleAction = (actionType) => {
    setAction(actionType);
    if (actionType === "showAddPage") {
      setShowProducts(false);
    }
  };

  const handleMessage2 = (message) => {
    if (message.type === "close") {
      setShowProducts(true); 
      setAction(""); 
    } else if (message.type === "confirm") {
      const productDetails = message.data;
      setProductList((prevList) => [...prevList, productDetails]);
      setShowProducts(true); 
      setAction(""); 
      handleConfirm(); 
    }
  };

  const handleSideBarClick = (message, newTitle) => {
    setTitle(newTitle); 
    console.log("Updated Title:", newTitle);

    
    if (newTitle === "Dashboard") {
      setShowProducts(true); 
      setAction(""); 
    } else if (newTitle === "Products") {
      setShowProducts(true); 
      setAction(""); 
    } else {
      setShowProducts(false); 
    }
  };

  const currentComponent = () => {
    if (action === "showAddPage") {
      return <AddPrPage onSendMessage2={handleMessage2} />;
    }

    if (showProducts && title === "Products") {
      return <Products onAddPr={handleAction} addedList={productList} />;
    }
    if(title == 'Customers'){
      return <Costumers/>
    }

    return <div className="flex justify-center items-center h-5/6  mt-2">Welcome to the {title}</div>; 
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      setIsConfirmed(false);
    }, 2500);
  };

  return (
    <section className="flex justify-center items-center lg:h-full w-full">
      <div className="h-5/6 flex justify-center items-center w-full lg:w-11/12 mt-14">
        <div id="hello" className='side-bar w-1/6 hidden lg:flex flex-col justify-start border-2 rounded-l-xl lg:border-l-slate-600 lg:border-t-slate-600 lg:border-b-slate-600 h-full pt-16 select-none'>
          <SideBar onSendMessage={handleSideBarClick} />
        </div>
        <Header />
        <div id="container" className="h-full lg:rounded-r-xl lg:w-5/6 lg:border-2 lg:border-slate-600">
          <TopHeader onSendMessage={handleSideBarClick} PageTitle={title} />
          {currentComponent()}
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
