import React from 'react';
import search from '../assets/search.svg';
import notifications from '../assets/notifications.svg';
import DropdownComponent from "../admin/DropdownComponent.jsx";

export const TopHeader = ({ PageTitle, onSendMessage }) => { 
  const handleSideBarClick = (message, title) => {
    if (onSendMessage) {
      onSendMessage(message, title); // Send title back to Admin
    }
  };

  return (
    <div className="interface flex flex-col w-full pt-3 pb-3 border-b-2 border-slate-600 select-none">
      <div className="interface-header w-full bg-transparent flex justify-between items-center">
        <div className='pl-20'>
          <h1 id='hello' className='text-2xl'>{PageTitle}</h1>
          <div id='theme-in-dropdown'>
            {/* DropdownComponent will call handleSideBarClick when an item is selected */}
            <DropdownComponent onSendMessage={handleSideBarClick} />
          </div>
        </div>
        <div className='flex justify-between gap-20 pr-20 pt-1 pb-1'>
          <img src={search} alt="Search" className='cursor-pointer w-7' />
          <img src={notifications} alt="Notifications" className='w-7 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
