import React, { useState } from "react";
import dashboard from '../assets/dashBord.svg';
import pr from '../assets/Products.svg';
import sales from '../assets/sales.svg';
import users from '../assets/users.svg';
import settings from '../assets/setting.svg';
import analyses from '../assets/analyses.svg';
import notifications from '../assets/notifications.svg';
const DropdownComponent = ({ onSendMessage }) => {
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const items = [
    { id: 'dashboard', label: 'Dashboard', icon: dashboard, message: "Admin", title: "Dashboard" },
    { id: 'products', label: 'Products', icon: pr, message: "Products list", title: "Products" },
    { id: 'sales', label: 'Sales', icon: sales, message: "Sales list", title: "Sales" },
    { id: 'customers', label: 'Customers', icon: users, message: "Customers list", title: "Customers" },
    { id: 'analytics', label: 'Analytics', icon: analyses, message: "Admin", title: "Analytics" },
    { id: 'notifications', label: 'Notifications', icon: notifications, message: "Admin", title: "Notifications" }, // Renamed icon variable
    { id: 'settings', label: 'Settings', icon: settings, message: "Admin", title: "Settings" },
  ];

  const sendMessage = (message, title, item) => {
    setSelectedItem(item); 
    if (onSendMessage) {
      onSendMessage(message, title);
    }
  };

  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">
        {selectedItem}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {items.map((item) => (
          <li key={item.id}>
            <div
              onClick={() => sendMessage(item.message, item.title, item.label)} // Sending label for selected item
              className={`flex items-center gap-2 p-2 cursor-pointer ${
                selectedItem === item.label ? 'bg-gray-200' : ''
              }`}
            >
              <img src={item.icon} alt={item.label} className="w-5 h-5" />
              <span>{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownComponent;