import React from "react";
import "./Button.css";

const Button = ({ value, onChildClick}) => {
  const handleOnClick = () => {
   if( onChildClick) {
    onChildClick();
   }
  };
  return (
    <div
      className="border flex items-center justify-center"
      style={{ marginLeft: "5%" }}
    >
      <button
        className="flex items-center  border-none justify-center w-full px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
        onClick={handleOnClick}
      >
        {value}
      </button>
    </div>
  );
};
export default Button;
