import React, { useState, useEffect } from 'react';
import { SideBar } from '../sideBar/SideBar';
import { TopHeader } from '../topheader/Topheader';
import { Products } from './Products';
import { Header } from '../header/Header';

export const Admin = () => {
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('Dashboard');
    const [action, setAction] = useState('');

    const handleAction = (AddPr) => {
        setAction(AddPr);  
        console.log(AddPr);
    };

    useEffect(() => {
        console.log('Updated action:', action);
    }, [action]);

    const handleMessageFromChild = (message) => {
        setMessage(message);
    };

    const handleUpdateTitleFromChild = (title) => {
        setTitle(title);
    };

    const handleSideBarClick = (message, title) => {
        handleMessageFromChild(message);
        handleUpdateTitleFromChild(title);
    };

    return (
        <section className='flex justify-center items-center h-full w-full'>
            <div className='h-5/6 flex justify-center items-center w-11/12 mt-14'>
                <SideBar onSendMessage={handleSideBarClick} />
                <Header />
                <div className="h-full rounded-r-xl w-5/6 border-t-2 border-r-2 border-b-2 border-slate-600">
                    <TopHeader PageTitle={title || "Dashboard"} />
                    {title === "Products" && <Products onAddPr={handleAction} />}  {/* Corrected prop name */}
                    {action === "showAddPage" && <AddPrPage/>}
                </div>
            </div>
        </section>
    );
};
