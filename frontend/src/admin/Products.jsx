import React, { useState, useEffect } from "react";
import filter from "../assets/filter.svg";
import { ProductRow } from "./ProductRow";

export const Products = ({ onAddPr, addedList }) => {
  const initialProducts = [];

  const [products, setProducts] = useState(initialProducts);
  
  useEffect(() => {
    if (addedList && addedList.length > 0) {
      setProducts((prevProducts) => {
        const existingIds = new Set(prevProducts.map((product) => product.id));
        const newProducts = addedList.filter((newProduct) => !existingIds.has(newProduct.id));
        return [...prevProducts, ...newProducts];
      });
    }
  }, [addedList]);
  

  const handleAddAction = () => {
    if (onAddPr) {
      onAddPr("showAddPage");
    }
  };

  const handleDelete = (id) => {
    console.log("Deleting product with ID:", id); // Debugging statement
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    setProducts(updatedProducts) ;
  };

  return (
    <div id="container" className="w-11/12 h-5/6 rounded-xl ml-12 mt-5 select-none">
      <div className="w-full bg-transparent h-16 border-b-2 border-slate-300 flex justify-between pl-10 pr-10 items-center">
        <h1 className="text-xl">Products list</h1>
        <div className="flex items-center justify-around gap-2">
          <details className="dropdown">
            <summary className="btn btn-ghost flex items-center gap-1 justify-center">
              <img src={filter} className="w-6" />
              <p>Filter</p>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>By price</a></li>
              <li><a>By patience</a></li>
              <li><a>By availability</a></li>
            </ul>
          </details>

          <button className="btn btn-neutral">See All</button>
          <button className="btn btn-active btn-primary" onClick={handleAddAction}>+ Add</button>
        </div>
      </div>
      <div className="flex justify-between gap-2 items-center w-full border-b-2 border-slate-300 pt-2 pb-2 pl-4 pr-4">
        <li className="list-none w-1/6 flex justify-center items-center">Product name</li>
        <li className="list-none w-1/6 flex justify-center items-center">Category</li>
        <li className="list-none w-1/6 flex justify-center items-center">Price</li>
        <li className="list-none w-1/6 flex justify-center items-center">Stock</li>
        <li className="list-none w-1/6 flex justify-center items-center">Status</li>
        <li className="list-none w-1/6 flex justify-center items-center">Action</li>
      </div>
      <div className="w-full overflow-y-auto h-4/5">
        {products.map((product) => (
          <ProductRow
            key={product.id} // Ensure unique key prop
            name={product.name}
            img={product.image}
            stock={product.stock}
            status={product.status}
            price={product.price}
            category={product.category}
            onDelete={() => handleDelete(product.id)} // Ensure proper delete function
          />
        ))}
      </div>
    </div>
  );
};
