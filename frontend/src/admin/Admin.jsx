import React, { useState, useEffect } from "react";
import { SideBar } from "../sideBar/SideBar";
import { TopHeader } from "../topheader/Topheader";
import { Products } from "./Products";
import { Header } from "../header/Header";
import { AddPrPage } from "./AddPrPage";

export const Admin = () => {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("Dashboard");
  const [action, setAction] = useState("");
  const [message2, setMessage2] = useState("true");
  const [isConfirmed, setIsConfirmed] = useState(false); 
  const [productList, setProductList] = useState([]);

  const handleAction = (AddPr) => {
    setAction(AddPr);
    if (AddPr === "showAddPage") {
      setMessage2("true");
    }
  };

  const handleMessage2 = (message) => {
    if (message.type === "close") {
      setMessage2(message.value);
    } else if (message.type === "confirm") {
      const productDetails = message.data;
      // Add product details to the product list
      setProductList((prevList) => [...prevList, productDetails]);
    }
  };

  const handleMessageFromChild = (message) => {
    setMessage(message);
  };

  const handleUpdateTitleFromChild = (title) => {
    setTitle(title);
  };

  const handleSideBarClick = (message, title) => {
    handleMessageFromChild(message);
    handleUpdateTitleFromChild(title);
  };

  useEffect(() => {
    if (message2 === "false") {
      setMessage(""); // Reset message state
      setAction(""); // Reset action state if needed
      handleConfirm();
    }
  }, [message2]);

  const currentComponent = () => {
    if (message2 === "false") {
      return <Products onAddPr={handleAction} addedList={productList} />;
    }

    if (action === "showAddPage" && title === "Products") {
      return <AddPrPage onSendMessage2={handleMessage2} onConfirm={handleConfirm} />;
    }

    if (title === "Products" && action !== "showAddPage") {
      return <Products onAddPr={handleAction} />;
    }

    return null;
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
        <SideBar onSendMessage={handleSideBarClick} />
        <Header />
        <div className="h-full rounded-r-xl w-5/6 border-t-2 border-r-2 border-b-2 border-slate-600">
          <TopHeader PageTitle={title || "Dashboard"} />
          {currentComponent()}
          {isConfirmed && (
            <div
              role="alert"
              className="alert alert-success w-2/3 mt-4 fixed top-0 left-72 z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>The product has been added successfully</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
