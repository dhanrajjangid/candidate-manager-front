import styled from "styled-components";

// Modal styles
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  height: 70vh;
  overflow: auto;
  border-radius: 10px;
  width: 350px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  height: 70vh;
  overflow: auto;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const FormField = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #374151;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #d1d5db;
  font-size: 16px;
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #d1d5db;
  font-size: 16px;
`;

export const SaveButton = styled.button`
  padding: 10px;
  background-color: #3b82f6;
  color: white;
  width: 100%;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

// Desktop View
export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  @media (max-width: 768px) {
    display: none; // Hide table on mobile
  }
`;

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: #f5f5f5;
`;

export const Th = styled.th`
  padding: 8px;
  text-align: left;
`;

export const Td = styled.td`
  padding: 8px;
`;

// Edit Button styling
export const EditButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

// Mobile View (Card view)
export const MobileView = styled.div`
  display: none;
  box-sizing: border-box;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileCard = styled.div`
  background-color: #FBFBFA;
  box-sizing: border-box;
  border: 0.5px solid #EEEC;
  min-width: 350px;
  width: 100%;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px;
`;

export const MobileCardContent = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CompanyPill = styled.div`
  border-radius: 50px;
  background-color: ${(props) =>
    props?.backgroundColor ? props?.backgroundColor : "#4749BC"};
  color: #fff;
  padding: 2px 10px;
`;
