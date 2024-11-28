import React, { useState, useEffect } from "react";
import { SideBar } from "../../components/sideBar/SideBar";
import { TopHeader } from "../../components/topheader/Topheader";
import { Products } from "../products/Products";
import { Header } from "../../components/header/Header";
import { AddPrPage } from "../add/AddPrPage";
import { Search } from "../../components/search/Search";
import { Costumers } from "../costumers/Costumers";
import {DropdownComponent} from "../dropDown/DropdownComponent.jsx"

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

  const handleSideBarClick = ( newTitle) => {
    setTitle(newTitle); 
    console.log("Updated Title:", newTitle);
    


    
    if (newTitle === "Dashboard") {
      setShowProducts(true); 
      setAction(""); 
    } else if (newTitle === "Products list") {
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

    if (showProducts && (title === "Products" || title ==="Products list")) {
      return <Products onAddPr={handleAction} addedList={productList} />;
    }
    if(title == 'Customers'|| title ==="Customers list"){
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
    <section className="flex justify-center items-center lg:h-full w-screen">
      <div className="h-5/6 flex justify-center items-center w-full lg:w-11/12 mt-14">
        <div id="hello" className='w-1/6 hidden lg:flex flex-col h-full justify-start   select-none fixed left-1 top-24'>
          <SideBar onSendMessage={handleSideBarClick} />
        </div>
        <Header/>
        <div  className="fixed right-0 left-0 lg:left-64 top-0 bottom-0    lg:border-2 lg:border-slate-600">
          <div className="hidden lg:flex mt-12 flex-col">
            <TopHeader PageTitle={title}/>
            <div>
              {currentComponent()}
            </div>
          </div>
          <div className="lg:hidden relative z-40 top-20 right-5">
            <Search/>
            
            
          </div>
          <div className="lg:hidden fixed z-50 top-20 left-5">
            <DropdownComponent onSendMessage={handleSideBarClick}/>
          </div>
          <div className="fixed lg:hidden top-28 ">
          {title ==="Products list"&&
            <Products/>
          }
          
          </div>
          <div className="fixed lg:hidden top-36 bottom-0 left-0 right-0">
          {title ==="Customers list"&&
            <Costumers/>
          }
          </div>
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
