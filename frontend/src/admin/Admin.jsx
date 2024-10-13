import React, { useState } from 'react';
import { SideBar } from '../sideBar/SideBar';
import { TopHeader } from '../topheader/Topheader';
import { AdminContent } from './AdminContent';

export const Admin = () => {
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');

    
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
            <div className='h-5/6 flex justify-center items-center w-11/12'>
                <SideBar onSendMessage={handleSideBarClick} />
                
                <div className="h-full rounded-r-xl w-5/6 border-t-2 border-r-2 border-b-2 border-slate-600">
                    <TopHeader PageTitle={title || "Dashboard"} />
                    <AdminContent subTitle={message ||"Admin"} />
                </div>
            </div>
        </section>
    );
};
