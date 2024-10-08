import styled from "styled-components";

export const Form = styled.form`
  max-width: 100%;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  text-align: left;
  max-width: 100%;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px; /* Adjust the font size */
  margin-top: 5px; /* Adjust as needed */
`;