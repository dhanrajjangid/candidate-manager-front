// FormModal.js
import React, { useState } from "react";
import {
  FormField,
  Label,
  Select,
} from "@/view/CandidateList/Components/StyledComponents";
import { ContainedButton, TextField } from "@/components/Common/FormInputs";
import { CustomDatePicker } from "@/components/Common/DatePickers";
import { useCandidate } from "../CandidateList/apiFunctions";

const CreateUserForm = () => {
  const { createCandidateApi } = useCandidate();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    deposit: "",
    totalAmount: "",
    date: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name, "::::::", e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await createCandidateApi(formData);
  };

  const handleDateChange = (value) => {
    setFormData({
      ...formData,
      date: value,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        boxSizing: "border-box",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <form
        style={{ minWidth: "350px", justifyContent: "center" }}
        onSubmit={handleSave}
      >
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
          <TextField
            name="deposit"
            type="number"
            value={formData.deposit}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label>Total Amount</Label>
          <TextField
            name="totalAmount"
            type="number"
            value={formData.totalAmount}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label>Date</Label>
          <CustomDatePicker
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
          />
        </FormField>

        <div style={{ display: "flex", gap: 5 }}>
          <ContainedButton type="button" onClick={handleSave}>
            Save
          </ContainedButton>
        </div>
      </form>
    </div>
  );
};

export default CreateUserForm;
