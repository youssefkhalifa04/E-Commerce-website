import React from 'react';
import dashboard from '../assets/dashBord.svg';
import pr from '../assets/Products.svg';
import sales from '../assets/sales.svg';
import users from '../assets/users.svg';
import settings from '../assets/setting.svg';
import analyses from '../assets/analyses.svg';
import notifications from '../assets/notifications.svg';

export const SideBar = ({ onSendMessage }) => {
    
    const sendMessage = (message, title) => {
        if (onSendMessage) {
            onSendMessage(message, title);
        }
    };

    return (
        <div className='side-bar w-1/6 flex flex-col justify-start border-2 rounded-l-xl border-slate-600 h-full pt-16'>
            <div 
                onClick={() => sendMessage("Admin", "Dashboard")} 
                className="dash-row pl-5 bg-transparent hover:bg-gray-300 pt-2 pb-2 cursor-pointer gap-2 flex justify-start items-center">
                <div className="w-9 flex justify-center items-center">
                    <img src={dashboard} className='w-9' />
                </div>
                <p>Dashboard</p>
            </div>
            <div 
                onClick={() => sendMessage("Products list", "Products")} 
                className="dash-row pl-5 bg-transparent hover:bg-gray-300 pt-2 pb-2 cursor-pointer gap-2 flex justify-start items-center">
                <div className="w-9 flex justify-center items-center">
                    <img src={pr} className='w-7' />
                </div>
                <p>Products</p>
            </div>
            <div 
                onClick={() => sendMessage("Sales list", "Sales")} 
                className="dash-row pl-5 bg-transparent hover:bg-gray-300 pt-2 pb-2 cursor-pointer gap-2 flex justify-start items-center">
                <div className="w-9 flex justify-center items-center">
                    <img src={sales} className='w-7' />
                </div>
                <p>Sales</p>
            </div>
            <div 
                onClick={() => sendMessage("Customers list", "Customers")} 
                className="dash-row pl-5 bg-transparent hover:bg-gray-300 pt-2 pb-2 cursor-pointer gap-2 flex justify-start items-center">
                <div className="w-9 flex justify-center items-center">
                    <img src={users} className='w-7' />
                </div>
                <p>Customers</p>
            </div>
            <div 
                onClick={() => sendMessage("Admin", "Analytics")} 
                className="dash-row pl-5 bg-transparent hover:bg-gray-300 pt-2 pb-2 cursor-pointer gap-2 flex justify-start items-center">
                <div className="w-9 flex justify-center items-center">
                    <img src={analyses} className='w-7' />
                </div>
                <p>Analytics</p>
            </div>
            <div 
                onClick={() => sendMessage("Admin", "Notifications")} 
                className="dash-row pl-5 bg-transparent hover:bg-gray-300 pt-2 pb-2 cursor-pointer gap-2 flex justify-start items-center">
                <div className="w-9 flex justify-center items-center">
                    <img src={notifications} className='w-7' />
                </div>
                <p>Notifications</p>
            </div>
            <div 
                onClick={() => sendMessage("Admin", "Settings")} 
                className="dash-row pl-5 bg-transparent hover:bg-gray-300 pt-2 pb-2 cursor-pointer gap-2 flex justify-start items-center">
                <div className="w-9 flex justify-center items-center">
                    <img src={settings} className='w-7' />
                </div>
                <p>Settings</p>
            </div>
        </div>
    );
};
