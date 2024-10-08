// StyledComponents.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  padding: 0 20px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 400px;
`;

export const StyledTextField = styled.input`
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 15px 10px;
  margin-bottom: 15px;
  width: calc(100% - 20px); /* Adjusted width */
  font-size: 1rem
`;

export const StyledButton = styled.button`
  padding: 15px 0;
  background-color: #4a4a4a;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
`;

export const SignUpLink = styled.span`
  color: purple;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 10px;
  display: inline-block;
`;

