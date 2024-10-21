import { useState, useRef } from "react";
import "./styles.css";
import s from '../../assets/search.svg';

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  

  const inputRef = useRef(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm)
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  
  const handleImageClick = () => {
    inputRef.current.focus();
    setSearchTerm("")
  };

  return (
    <div>
      <div className="container-s relative">
        <input
          ref={inputRef} 
          id="searchInput"
          placeholder="Search..."
          className="js-search"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {!isFocused && (
          <img
            src={s}
            className="image w-7 absolute top-4 right-4 cursor-pointer"
            alt="Search Icon"
            onClick={handleImageClick}
          />
        )}
      </div>
    </div>
  );
}
