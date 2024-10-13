import React, { useState } from 'react';
import './basket.css';
import 'boxicons'
import trash from '../assets/trash.svg'
import { Header } from '../header/Header';
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
        <tr className="cart-item">
            <td>
                <h4 className="item-name">{item.name}</h4>
                {item.shipDate && <p className="ship-date">{item.shipDate}</p>}
                <p className="item-description">{item.description}</p>
            </td>
            <td className="item-price">${item.price.toFixed(2)}</td>
            <td>
                <div className="cart-item-quantity">
                    <button className="btn btn-xs" onClick={handleDecrement}>−</button>
                    <input type="text" value={item.quantity} readOnly className="quantity-input" />
                    <button className="btn btn-xs" onClick={handleIncrement}>+</button>
                </div>
            </td>
            <td className="item-total">${(item.price * item.quantity).toFixed(2)}</td>
            <td>
                <button className="" onClick={() => onDelete(item.id)}>
                    <img src={trash} className='w-7'/>
                </button>
            </td>
        </tr>
    );
};

export const Cart = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Timberland 6" Premium Boot',
            shipDate: 'Estimated Ship Date: June 6th',
            description: 'Waterproof Leather',
            price: 199.99,
            quantity: 1,
          },
          {
            id: 2,
            name: 'Dr. Martens 1460 Pascal Velvet Boots',
            description: 'Classic velvet upper with tough leather construction',
            price: 179.99,
            quantity: 1,
          },
          {
            id: 3,
            name: 'Red Wing Iron Ranger Boots',
            price: 329.99,
            quantity: 1,
          },
          {
            id: 4,
            name: 'Columbia Bugaboot Plus IV Omni-Heat',
            price: 139.99,
            quantity: 1,
          },
          {
            id: 5,
            name: 'Sorel Caribou Boot',
            price: 169.99,
            quantity: 1,
          },
    ]);

    const handleQuantityChange = (id, newQuantity) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const calculateSubtotal = () => {
        return items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    };

    const calculateSalesTax = () => {
        const taxRate = 0.1; // Assuming 10% sales tax
        return (calculateSubtotal() * taxRate).toFixed(2);
    };

    const calculateTotal = () => {
        return (parseFloat(calculateSubtotal()) + parseFloat(calculateSalesTax())).toFixed(2);
    };

    return (
        <div className="main select-none">
            <Header/>
            <div className="cart-container">
            <h1>Your Cart ({items.length} items)</h1>
            <table className="cart-table">
                
                <tbody>
                    {items.map(item => (
                        <CartItem 
                            key={item.id} 
                            item={item} 
                            onQuantityChange={handleQuantityChange} 
                            onDelete={handleDelete} 
                        />
                    ))}
                </tbody>
            </table>
            <div className="cart-summary">
                <div className="summary-details">
                    <p>Subtotal: <strong>${calculateSubtotal()}</strong></p>
                    <p>Sales Tax: <strong>${calculateSalesTax()}</strong></p>
                    <p className="grand-total">Grand Total: <strong>${calculateTotal()}</strong></p>
                </div>
                <button className="btn btn-success">CHECK OUT</button>
            </div>
        </div>
        </div>
    );
};



