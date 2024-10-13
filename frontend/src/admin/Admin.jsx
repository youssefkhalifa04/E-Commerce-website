import React, { useState } from 'react';
import { SideBar } from '../sideBar/SideBar';
import { TopHeader } from '../topheader/Topheader';
import { Products } from './Products';
import { Header } from '../header/Header';

export const Admin = () => {
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('Dashboard');
    

    
    const handleMessageFromChild = (message ) => {
        setMessage(message);
        
       
    };
    

    const handleUpdateTitleFromChild = (title) => {
        setTitle(title);
        console.log(title)
    };

    const handleSideBarClick = (message, title) => {
        handleMessageFromChild(message);
        handleUpdateTitleFromChild(title);
        handlethis(state) ;
        
    };

    return (
        <section className='flex justify-center items-center h-full w-full '>
            
            <div className='h-5/6 flex justify-center items-center w-11/12 mt-14'>
                <SideBar onSendMessage={handleSideBarClick} />
                <Header/>
                <div className="h-full rounded-r-xl w-5/6 border-t-2 border-r-2 border-b-2 border-slate-600">
                    <TopHeader PageTitle={title || "Dashboard"} />
                    {title == "Products" &&< Products/>}
                </div>
            </div>
        </section>
    );
};
