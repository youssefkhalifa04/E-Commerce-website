import React, { useState } from 'react';
import dashboard from '../../assets/dashBord.svg';
import pr from '../../assets/Products.svg';
import sales from '../../assets/sales.svg';
import users from '../../assets/users.svg';
import settings from '../../assets/setting.svg';
import analyses from '../../assets/analyses.svg';
import notifications from '../../assets/notifications.svg';
import './sideBar.css'; 

export const SideBar = ({ onSendMessage }) => {
    // Initialize selectedItem to 'dashboard' to keep it active on load
    const [selectedItem, setSelectedItem] = useState('dashboard');

    const sendMessage = (message ,state, title, item) => {
        setSelectedItem(item); 
        if (onSendMessage) {
            onSendMessage(message, title);
        }
    };

    const items = [
        //{ id: 'dashboard', label: 'Dashboard', icon: dashboard, message: "Admin", title: "Dashboard" },
        { id: 'products', label: 'Products', icon: pr, message: "Products list", title: "Products" },
        //{ id: 'sales', label: 'Sales', icon: sales, message: "Sales list", title: "Sales" },
        { id: 'customers', label: 'Customers', icon: users, message: "Customers list", title: "Customers" },
        //{ id: 'analytics', label: 'Analytics', icon: analyses, message: "Admin", title: "Analytics" },
        //{ id: 'notifications', label: 'Notifications', icon: notifications, message: "Admin", title: "Notifications" },
        //{ id: 'settings', label: 'Settings', icon: settings, message: "Admin", title: "Settings" },
    ];

    return (
        <div >
            {items.map((item) => (
                <div
                    key={item.id}
                    onClick={() => sendMessage(item.message, item.state ,item.title, item.id)} 
                    className={`dash-row pl-5 pt-2 pb-2 cursor-pointer gap-2 flex justify-start items-center ${selectedItem === item.id ? 'active' : ''}`} // Add active class if selected
                >
                    <div className="w-9 flex justify-center items-center">
                        <img src={item.icon} className='w-7' alt={`${item.label} icon`} />
                    </div>
                    <p>{item.label}</p>
                </div>
            ))}
        </div>
    );
};
