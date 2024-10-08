import { ButtonContainer } from "@/view/Home/Components/StyledComponents";
import React from "react";
import { ContainedButton, OutlinedButton } from "./FormInputs";
import { useNavigate } from "react-router-dom";

const UnderConstruction = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: '10px',
        boxSizing: 'border-box',
        gap: '20px'
      }}
    >
      <h3>This section is under construction</h3>
      <div 
       style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: '10px'
      }}>
        <ContainedButton onClick={() => navigate("/player-listing")}>
          FIND PLAYERS
        </ContainedButton>
        <OutlinedButton onClick={() => navigate("/")}>
          Home
        </OutlinedButton>
      </div>
    </div>
  );
};

export default UnderConstruction;
