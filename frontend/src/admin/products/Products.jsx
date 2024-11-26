import React, { useState, useEffect } from "react";
import filter from "../../assets/filter.svg";
import { ProductRow } from "./ProductRow";
import './h.css';

export const Products = ({ onAddPr, addedList }) => {

  const [products, setProducts] = useState([]);

  const handleAddAction = () => {
    if (onAddPr) {
      onAddPr("showAddPage");
    }
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="w-full lg:w-11/12 fixed right-0 lg:relative lg:ml-12 mt-5 select-none">
      <div className="w-full bg-transparent h-16 border-b-2 flex justify-between pl-10 pr-10 items-center">
        <h1 className="hidden lg:flex text-xl">Products list</h1>
        <div className="flex  w-full lg:w-min lg:relative items-center justify-around gap-2">
          <div>
          
          </div>
          <details className="dropdown relative">
            <summary className="hover:bg-gray-200 pr-5 pl-5  flex justify-center cursor-pointer rounded-lg items-center p-3 gap-1 ">
              <img src={filter} className="w-6" alt="filter icon"/>
              <div >
              <p className="font-bold">Filter</p>
              </div>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow absolute lg:top-full mt-2 sm:top-12">
              <li >
                <a>By price</a>
              </li>
              <li >
                <a>By patience</a>
              </li>
              <li >
                <a>By availability</a>
              </li>
            </ul>
          </details>

          <button className="btn btn-neutral">See All</button>
          <button
            className="btn btn-active btn-primary"
            onClick={handleAddAction}
          >
            + Add
          </button>
        </div>
      </div>

      <div className="relative w-full">
        <div
          id="screen"
          className="flex justify-between gap-2 items-center w-full border-b-2 border-slate-300 pt-2 pb-2 pl-4 pr-4 sticky top-0 bg-white"
        >
          <li className="list-none w-1/6 flex justify-center items-center">
            Product name
          </li>
          <li className="list-none w-1/6 flex justify-center items-center">
            Category
          </li>
          <li className="list-none w-1/6 flex justify-center items-center">
            Price
          </li>
          <li className="list-none w-1/6 flex justify-center items-center">
            Stock
          </li>
          <li className="list-none w-1/6 flex justify-center items-center">
            Status
          </li>
          <li className="list-none w-1/6 flex justify-center items-center">
            Action
          </li>
        </div>

        {products.map((product) => (
          <ProductRow
            key={product._id}
            id={product._id}
            name={product.Name}
            img={product.ImageURL}
            status={product.Status}
            price={product.Price}
            category={product.Category}
            onDelete={() => handleDelete(product.id)}
          />
        ))}
      </div>
    </div>
  );
};
