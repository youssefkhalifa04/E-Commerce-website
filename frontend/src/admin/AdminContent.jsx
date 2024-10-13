import React from 'react'
import filter from '../assets/filter.svg'
export const AdminContent = ({subTitle}) => {
  return (
    <div className="w-11/12 h-5/6  rounded-xl ml-12 mt-5">
            <div className="w-full bg-transparent h-16 border-b-2 border-slate-300 flex justify-between pl-10 pr-10 items-center">
                <h1 className='text-xl'>{subTitle}</h1>
                <div className='flex items-center justify-around gap-2'>
                    
                    
                    <details className="dropdown">
                        <summary className="btn btn-ghost flex items-center gap-1 justify-center">
                            <img src={filter} className='w-6' />
                            <p>Filter</p>
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>By price</a></li>
                            <li><a>By patience</a></li>
                        </ul>
                    </details>
                   
                    <button className="btn btn-neutral">
                        See All
                    </button>
                    <button className="btn btn-active btn-primary">
                        + Add
                    </button>
                
                </div>
            </div>
    </div>
  )
}
