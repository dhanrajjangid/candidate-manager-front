// FormModal.js
import React, { useState } from "react";
import { Label } from "@/view/CandidateList/Components/StyledComponents";
import CreateUserForm from "./CreateUserForm";

const CreateUser = () => {
  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Add Candidate</h3>
      <CreateUserForm />
    </div>
  );
};

export default CreateUser;
