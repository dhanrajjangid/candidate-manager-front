// FormModal.js
import React, { useState } from "react";
import {
  Overlay,
  FormModalContainer,
  CloseButton,
  FormField,
  Label,
  Select,
} from "./StyledComponents";
import {
  ContainedButton,
  OutlinedButton,
  TextField,
} from "@/components/Common/FormInputs";
import { useCandidate } from "../apiFunctions";

const FormModal = ({ user, closeModal }) => {
  const { updateCandidate } = useCandidate();
  const [formData, setFormData] = useState({
    name: user.name,
    id: user?._id,
    company: user.company,
    role: user.role,
    deposit: user.deposit,
    addDeposit: 0,
    totalAmount: user.totalAmount,
    status: user.status,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedValue = name === "addDeposit" ? parseFloat(value) || 0 : value;

    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSave = async () => {
    // Logic to handle saving of the data
    try {
      await updateCandidate(formData);
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Overlay>
      <FormModalContainer>
        <CloseButton onClick={closeModal}>×</CloseButton>
        <form>
          <FormField>
            <Label>Name</Label>
            <TextField
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label>Company</Label>
            <Select
              name="company"
              value={formData.company}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="Freshprints">Freshprints</option>
              <option value="Revolut">Revolut</option>
            </Select>
          </FormField>

          <FormField>
            <Label>Role</Label>
            <Select name="role" value={formData.role} onChange={handleChange}>
              <option value=""></option>

              <option value="Operations Manager">Operations Manager</option>
              <option value="Operations Associate">Operations Associate</option>
              <option value="Inside Sales Associate">
                Inside Sales Associate
              </option>
            </Select>
          </FormField>

          <FormField>
            <Label>Deposit</Label>
            <TextField name="deposit" value={formData.deposit} disabled />
          </FormField>

          <FormField>
            <Label>Add More Deposit</Label>
            <TextField
              name="addDeposit"
              type="number"
              value={parseFloat(formData.addDeposit)}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label>Total Amount</Label>
            <TextField
              name="remainingAmount"
              value={formData.totalAmount}
              disabled
            />
          </FormField>

          <FormField>
            <Label>Status</Label>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="Applied">Applied</option>
              <option value="Assessment Pending">Assessment Pending</option>
              <option value="Assessment Completed">Assessment Completed</option>
              <option value="Interview Pending">Interview Pending</option>
              <option value="Interview Completed">Interview Completed</option>
              <option value="Offer Letter Received">
                Offer Letter Received
              </option>
              <option value="Rejected">
                Rejected
              </option>
            </Select>
          </FormField>
          <div style={{ display: "flex", gap: 5 }}>
            <OutlinedButton
              padding="15px 10px"
              border="1px solid #BF3131"
              onClick={closeModal}
            >
              Cancel
            </OutlinedButton>
            <ContainedButton
              padding="15px 10px"
              backgroundColor="#BF3131"
              border="1px solid #BF3131"
              type="button"
              onClick={handleSave}
            >
              Save
            </ContainedButton>
          </div>
        </form>
      </FormModalContainer>
    </Overlay>
  );
};

export default FormModal;
