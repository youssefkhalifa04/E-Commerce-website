import React from 'react'

export const Search = () => {
  return (
    <>
      <div className="join">
        <div>
          <div>
            <input className="input input-bordered join-item" placeholder="Search" />
          </div>
        </div>
        <select className="select select-bordered join-item">
          <option disabled selected>Filter by Categorie</option>
          <option>Mens</option>
          <option>Women</option>
          <option>Kids</option>
        </select>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">new</span>
          <button className="btn join-item">Search</button>
        </div>
      </div>
    
    
    </>
  )
}
