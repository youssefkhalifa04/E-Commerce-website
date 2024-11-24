import React from "react";

export const Row = ({ username, email, hashedPassword }) => {
  return (
    <div className="w-full flex flex-row items-center justify-center hover:bg-gray-300 cursor-pointer">
      <p className="w-1/3 flex items-center justify-center ">{username}</p>
      <p className="w-1/3 flex items-center justify-center ">{email}</p>
      <p className="w-1/3 flex items-center justify-center ">{hashedPassword}</p>
    </div>
  );
};
