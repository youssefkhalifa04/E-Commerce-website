import React, { useState, useEffect } from "react";
import filter from "../../assets/filter.svg";
import { ProductRow } from "./ProductRow";

export const Products = ({ onAddPr, addedList }) => {
  

  const [products, setProducts] = useState([]);
  

  
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching customers:", error);
      });
  }, []);
  

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
    <div
      id="container"
      className="w-11/12 h-5/6 rounded-xl ml-12 mt-5 select-none"
    >
      <div className="w-full bg-transparent h-16 border-b-2  flex justify-between pl-10 pr-10 items-center">
        <h1 className="text-xl">Products list</h1>
        <div className="flex items-center justify-around gap-2">
          <details className="dropdown">
            <summary className="btn btn-ghost flex items-center gap-1 justify-center">
              <img src={filter} className="w-6" alt="filter icon"/>
              <p>Filter</p>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <a>By price</a>
              </li>
              <li>
                <a>By patience</a>
              </li>
              <li>
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

      <div className="w-full overflow-auto h-4/5">
        <div
          id="screen"
          className="flex justify-between gap-2 items-center w-full border-b-2 border-slate-300 pt-2 pb-2 pl-4 pr-4 sticky top-0  z-10 overflow-x-auto"
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
