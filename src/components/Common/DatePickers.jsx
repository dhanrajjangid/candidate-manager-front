import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker {
    border-radius: 4px;
    border: 1px solid #333;
    background-color: #333;
  }

  .react-datepicker__header {
    background-color: #333;
    border-bottom: 1px solid #555;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    color: #fff;
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    color: #fff;
  }

  .react-datepicker__day--selected {
    background-color: #555;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #777;
  }

  .custom-datepicker-input {
    box-sizing: border-box;
    width: calc(100% - 2px);
    padding: 10px;
    font-size: 1rem;
    border-radius: 4px;
    border:none;
    border: 1px solid #ccc;
  }
`;

export const CustomDatePicker = ({onChange, dateFormat}) => {
  const [value, setValue] = useState(null);

  const handleDateChange = (date) => {
    setValue(date);
    if (onChange) {
      onChange(date);
    }
  };
  return (
    <DatePickerWrapper>
      <DatePicker
        selected={value}
        onChange={handleDateChange}
        dateFormat={dateFormat || "dd/MM/yyyy"}
        timeIntervals={15}
        className="custom-datepicker-input"
      />
    </DatePickerWrapper>
  );
};
