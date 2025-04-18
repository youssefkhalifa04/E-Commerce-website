import React from 'react';
import {Search} from '../search/Search.jsx'
import notifications from '../../assets/notifications.svg';



export const TopHeader = ({ PageTitle, onSendMessage }) => { 

  return (
    <div className="interface flex flex-col w-8 lg:w-full pt-3  border-b-2 mt-11 lg:mt-0 border-slate-600 bg-slate-200 bg-transparent select-none">
      <div className="interface-header w-full bg-transparent flex justify-between items-center">
        <div className='pl-20'>
          <h1 id='hello' className='text-2xl font-bold'>{PageTitle}</h1>
          
        </div>
        <div className='flex justify-between gap-20 pr-20 pt-1 pb-1'>
          <Search/>
          <img src={notifications} alt="Notifications" className='w-7 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
