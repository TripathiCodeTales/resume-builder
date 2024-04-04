import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalenderDate = ({ placeholder, handleDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    const newDate = new Date(date);
    setStartDate(newDate);
    if (handleDate) {
      handleDate(newDate);
    }
  };

  return (
    <div className="date-data">
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        className="datedata"
        placeholderText={placeholder}
      />
    </div>
  );
};

export default CalenderDate;
