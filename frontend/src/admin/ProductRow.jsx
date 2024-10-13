import React from 'react'
import pic from '../assets/shoses.avif'
import del from '../assets/trash.svg'
export const ProductRow = ({img , name , category , price , stock , status , onDelete}) => {
  return (
    <div className='flex justify-between items-center  pl-4 pr-4 gap-2 h-16 border-b-2 border-slate-300 cursor-pointer hover:bg-slate-200'>
        <div className="flex justify-start gap-3 items-center w-1/6 h-full ">
            <img src={img || pic} className='w-10 h-10 object-cover'/>
            <p>{name || "Nike air force" }</p>
        </div>
        <div className="flex justify-center items-center w-1/6 h-full ">{ category || "Mens Shoses" }</div>
        <div className="flex justify-center items-center w-1/6 h-full ">${ price || "200"}</div>
        <div className="flex justify-center items-center w-1/6 h-full ">{stock || "In Stock"}</div>
        <div className="flex justify-center items-center w-1/6 h-full ">{status ||"Active" }</div>
        <div className="flex justify-center items-center w-1/6 h-full ">
            <img src={del} alt="Delete" className='w-7'onClick={onDelete}/>
        </div>
    </div>
  )
}
