import React from "react";
import styled from "styled-components";

// TextField component
export const TextField = styled.input.attrs((props) => ({
  type: props.type === "number" ? "number" : "text",
  placeholder: props.placeholder ?  props.placeholder : ""
}))`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 100%;
  min-width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
`;

export const UnderlinedTextField = styled.input.attrs((props) => ({
  type: props.type === "number" ? "number" : "text",
}))`
  box-sizing: border-box;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  max-width: 100%;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-bottom: 2px solid #ccc;
    border-radius: 5px;
  }
`;

// Dropdown component
export const Dropdown = styled.select`
  box-sizing: border-box;

  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  appearance: none; /* Remove default arrow icon */
  background-color: #fff; /* Set background color */
  font-size: 16px; /* Adjust font size */
  cursor: pointer; /* Show pointer cursor */
  outline: none; /* Remove default focus outline */
  -webkit-appearance: none; /* For older versions of iOS */
  -moz-appearance: none; /* For older versions of Firefox */

  /* Add custom arrow icon */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center; /* Adjust position of arrow icon */
  background-size: 16px 16px; /* Adjust size of arrow icon */
`;

export const DropdownContainer = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

// Date Picker component

// Button component (Contained)
export const ContainedButton = styled.button`
  box-sizing: border-box;
  padding: ${(props) => (props?.padding ? props?.padding : "15px 20px")};
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) =>
    props?.backgroundColor ? props?.backgroundColor : "#333"};
  color: ${(props) => (props?.color ? props?.color : "#fff")};
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: ${(props) => (props?.border ? props?.border : "1px solid #333")};
  &:hover {
    background-color: #fff;
    color: #333;
  }
`;

// Button component (Outlined)
export const OutlinedButton = styled.button`
  box-sizing: border-box;

  padding: ${(props) => (props?.padding ? props?.padding : "15px 20px")};
  width: 100%;
  border: ${(props) => (props?.border ? props?.border : "2px solid #333")};
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

// Container for responsive design
export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;
