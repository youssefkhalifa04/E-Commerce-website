import React from "react";

export const Row = ({ Firstname, Lastname, email, date ,onClick}) => {
  const handleSeeMore = () => {
    const seeMore  = "See more about " + Firstname;
    return seeMore ;
  };
  return (
    <div onClick={onClick} title={handleSeeMore()} className="w-full flex flex-row items-center justify-center hover:bg-gray-300 cursor-pointer">
      <p className="w-1/4 flex items-center justify-center ">{Firstname}</p>
      <p className="w-1/4 flex items-center justify-center ">{Lastname}</p>
      <p className="w-1/4 flex items-center justify-center  ">{email}</p>
      <p className="w-1/4 flex items-center justify-center ">{date}</p>
    </div>
  );
};
