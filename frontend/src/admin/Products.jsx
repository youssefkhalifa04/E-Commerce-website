import React from "react";
import  { useState } from "react";

import filter from "../assets/filter.svg";
import airforce from '../assets/shoses.avif'
import Ultraboost from '../assets/adidasUltra.avif'
import puma from '../assets/puma.avif'
import rebook from '../assets/rebook.jpg'
import newb from '../assets/new.webp'
import hovr from '../assets/hovravif.avif'
import sbadri from '../assets/sbadri.webp'
import triumph from '../assets/triumph.jpg'
import hoka from '../assets/hoka.jpg'
import vans from '../assets/vans.webp'


import { ProductRow } from "./ProductRow";
export const Products = () => {
    const [products, setProducts] = useState([
        {
          id: 1,
          img: airforce,
          name: "Nike Air Force",
          category: "Mens Shoes",
          price: 200,
          stock: "In Stock",
          status: "Active",
        },
        {
          id: 2,
          img: Ultraboost,
          name: "Adidas Ultraboost",
          category: "Mens Shoes",
          price: 180,
          stock: "Out of Stock",
          status: "Inactive",
        },
        {
          id: 3,
          img: puma,
          name: "Puma Suede Classic",
          category: "Mens Shoes",
          price: 90,
          stock: "In Stock",
          status: "Active",
        },
        {
          id: 4,
          img: rebook,
          name: "Reebok Classic Leather",
          category: "Mens Shoes",
          price: 85,
          stock: "In Stock",
          status: "Active",
        },
        {
          id: 5,
          img: newb,
          name: "New Balance 574",
          category: "Mens Shoes",
          price: 120,
          stock: "In Stock",
          status: "Active",
        },
        {
          id: 6,
          img: hovr,
          name: "Under Armour HOVR Phantom",
          category: "Mens Shoes",
          price: 140,
          stock: "Out of Stock",
          status: "Inactive",
        },
        {
          id: 7,
          img: sbadri,
          name: "Asics Gel-Kayano",
          category: "Mens Shoes",
          price: 160,
          stock: "In Stock",
          status: "Active",
        },
        {
          id: 8,
          img: triumph,
          name: "Saucony Triumph",
          category: "Mens Shoes",
          price: 150,
          stock: "In Stock",
          status: "Active",
        },
        {
          id: 9,
          img: hoka,
          name: "Hoka One One Bondi",
          category: "Mens Shoes",
          price: 180,
          stock: "In Stock",
          status: "Active",
        },
        {
          id: 10,
          img: vans,
          name: "Vans Old Skool",
          category: "Mens Shoes",
          price: 65,
          stock: "In Stock",
          status: "Active",
        },
      ]);
      

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };
  return (
    <div className="w-11/12 h-5/6  rounded-xl ml-12 mt-5 select-none">
      <div className="w-full bg-transparent h-16 border-b-2 border-slate-300 flex justify-between pl-10 pr-10 items-center">
        <h1 className="text-xl">Products list</h1>
        <div className="flex items-center justify-around gap-2">
          <details className="dropdown">
            <summary className="btn btn-ghost flex items-center gap-1 justify-center">
              <img src={filter} className="w-6" />
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
                <a>By availbility</a>
              </li>
            </ul>
          </details>

          <button className="btn btn-neutral">See All</button>
          <button className="btn btn-active btn-primary">+ Add</button>
        </div>
      </div>
      <div className="flex justify-between gap-2 itmes-center w-full border-b-2 border-slate-300 pt-2 pb-2 pl-4 pr-4">
        <li className="list-none w-1/6  flex justify-center items-center">
          Product name
        </li>
        <li className="list-none w-1/6  flex justify-center items-center">
          Category
        </li>
        <li className="list-none w-1/6  flex justify-center items-center">
          Price
        </li>
        <li className="list-none w-1/6  flex justify-center items-center">
          Stock
        </li>
        <li className="list-none w-1/6  flex justify-center items-center">
          Status
        </li>
        <li className="list-none w-1/6  flex justify-center items-center">
          Action
        </li>
      </div>
      <div className="w-full overflow-y-auto h-4/5">
        {products.map((product) => (
          <ProductRow
            key={product.id}
            name={product.name}
            img={product.img}
            stock={product.stock}
            status={product.status}
            price={product.price}
            onDelete={() => handleDelete(product.id)}
          />
        ))}
      </div>
    </div>
  );
};
