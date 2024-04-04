import React from "react";

const Submit = ({ onSubmit }) => {
  const handleOnClick = () => {
    onSubmit();
  };
  return (
    <div
      className="border flex items-center justify-center"
      style={{ marginLeft: "5%" }}
    >
      <button
        type="submit"
        className="flex border-none justify-center w-full px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
        onClick={handleOnClick}
      >
        Submit
      </button>
    </div>
  );
};

export default Submit;
