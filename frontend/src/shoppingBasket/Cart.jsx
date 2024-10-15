import React, { useState } from "react";
import "./basket.css";
import "boxicons";
import trash from "../assets/trash.svg";
import { Header } from "../header/Header";
const CartItem = ({ item, onQuantityChange, onDelete }) => {
  const handleIncrement = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="cart-item flex justify-between items-center border-b border-gray-300 p-4 w-full">
      <div className="item-details flex-1">
        <h4 className="item-name">{item.name}</h4>
        {item.shipDate && <p className="ship-date">{item.shipDate}</p>}
        <p className="item-description">{item.description}</p>
      </div>
      <div className="item-price w-24 text-right">${item.price.toFixed(2)}</div>
      <div className="cart-item-quantity flex items-center">
        <button className="btn btn-xs" onClick={handleDecrement}>
          −
        </button>
        <input
          type="text"
          value={item.quantity}
          readOnly
          className="quantity-input w-12 text-center mx-2"
        />
        <button className="btn btn-xs" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div className="item-total w-24 text-right">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <div className="delete-item w-12 text-right">
        <button onClick={() => onDelete(item.id)}>
          <img src={trash} className="w-7" alt="Delete" />
        </button>
      </div>
    </div>
  );
};

export const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Timberland 6" Premium Boot',
      shipDate: "Estimated Ship Date: June 6th",
      description: "Waterproof Leather",
      price: 199.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Dr. Martens 1460 Pascal Velvet Boots",
      description: "Classic velvet upper with tough leather construction",
      price: 179.99,
      quantity: 1,
    },
    {
      id: 3,
      name: "Red Wing Iron Ranger Boots",
      price: 329.99,
      quantity: 1,
    },
    {
      id: 4,
      name: "Columbia Bugaboot Plus IV Omni-Heat",
      price: 139.99,
      quantity: 1,
    },
   
    {
      id: 5,
      name: "Sorel Caribou Boot",
      price: 169.99,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return items
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const calculateSalesTax = () => {
    const taxRate = 0.1; // Assuming 10% sales tax
    return (calculateSubtotal() * taxRate).toFixed(2);
  };

  const calculateTotal = () => {
    return (
      parseFloat(calculateSubtotal()) + parseFloat(calculateSalesTax())
    ).toFixed(2);
  };

  return (
    <div className="main select-none">
      <Header />
      <div className="cart-container h-5/6 mt-24 w-2/3">
        <h1>Your Cart ({items.length} items)</h1>

        <div className="cart-table overflow-y-auto h-1/2 mt-10">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onDelete={handleDelete}
            />
          ))}
        </div>

        <div className="cart-summary fixed bottom-11 left-1/4 right-1/4">
          <div className="summary-details">
            <p>
              Subtotal: <strong>${calculateSubtotal()}</strong>
            </p>
            <p>
              Sales Tax: <strong>${calculateSalesTax()}</strong>
            </p>
            <p className="grand-total">
              Grand Total: <strong>${calculateTotal()}</strong>
            </p>
          </div>
          <button className="btn btn-success">CHECK OUT</button>
        </div>
      </div>
    </div>
  );
};
