import React, { useState } from 'react';
import './basket.css';
import 'boxicons'
import trash from '../assets/trash.png'
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
                    <img src={trash} alt="" />
                </button>
            </td>
        </tr>
    );
};

export const Cart = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Pi Pizza Oven',
            shipDate: 'Estimated Ship Date: June 6th',
            description: 'Fuel Source: Wood Only',
            price: 469.99,
            quantity: 1
        },
        {
            id: 2,
            name: 'Grill Ultimate Bundle',
            description: 'Add accident protection for $29.99',
            price: 549.99,
            quantity: 1
        },
        {
            id: 3,
            name: 'Starters (4 pack)',
            price: 0.00,
            quantity: 1
        },
        {
            id: 4,
            name: 'Charcoal Grill Pack',
            price: 0.00,
            quantity: 1
        },
        {
            id: 5,
            name: 'iphone xr',
            price: 600,
            quantity: 1
        }
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
            <div className='bg-green-500 fixed top-0 right-0 left-0'>
                <h1 >Hello dear costumer</h1>
            </div>
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



