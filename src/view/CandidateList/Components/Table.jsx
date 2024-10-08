import React, { useEffect, useState } from "react";
import {
  TableContainer,
  TableElement,
  Thead,
  Th,
  Td,
  EditButton,
  MobileView,
  MobileCard,
  MobileCardContent,
  CompanyPill,
} from "./StyledComponents"; // Update styled components as well
import FormModal from "./FormModal";
import { ContainedButton, TextField } from "@/components/Common/FormInputs";
import { useSelector } from "react-redux";
import { useCandidate } from "../apiFunctions";
import dayjs from "dayjs";

const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const users = useSelector((state) => state.candidate.candidateList);
  const { getCandidateList } = useCandidate();
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (users?.length > 0) {
      setFilteredList(users);
    }
  }, [users]);
  useEffect(() => {
    getCandidateList();
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const formattedDate = (date) => {
    return dayjs(date)?.locale("en")?.format("DD MMM, YYYY");
  };
  const handleSearch = (e) => {
    console.log(e.target.value, "value is consoeld here`")
    if (e.target.value) {
      const data = users.filter((item) =>
        item?.name?.toLowerCase()?.includes(e?.target?.value?.toLowerCase())
      );
      setFilteredList(data);
    } else {
      setFilteredList(users);
    }
  };
  return (
    <>
      <div style={{ width: "100%", padding: "15px", boxSizing: 'border-box' }}>
        <TextField placeholder="Search Candidate" onChange={handleSearch} widthtype="text" />
      </div>
      <TableContainer>
        <TableElement>
          <Thead>
            <tr>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>Date</Th>
              <Th>Company</Th>
              <Th>Role</Th>
              <Th>Deposit</Th>
              <Th>Total Amount</Th>
              <Th>Status</Th>
              <Th>Edit</Th>
            </tr>
          </Thead>
          <tbody>
            {filteredList?.map((user, index) => (
              <tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{user.name}</Td>
                <Td>{formattedDate(user?.date)}</Td>
                <Td>{user.company}</Td>
                <Td>{user.role}</Td>
                <Td>₹{user.deposit}</Td>
                <Td>₹{user.totalAmount}</Td>
                <Td>{user.status}</Td>
                <Td>
                  <EditButton onClick={() => openModal(user)}>Edit</EditButton>
                </Td>
              </tr>
            ))}
          </tbody>
        </TableElement>
      </TableContainer>

      {/* Mobile View */}
      <MobileView>
        {filteredList?.map((user, index) => (
          <MobileCard key={index}>
            <MobileCardContent>
              <strong style={{ fontSize: "18px" }}>{user.name}</strong>{" "}
              <CompanyPill
                backgroundColor={
                  user.company === "Revolut" ? "#0E1112" : "#BF3131"
                }
              >
                {user.company}
              </CompanyPill>
            </MobileCardContent>
            <MobileCardContent>
              <strong>Date:</strong> {formattedDate(user?.date)}
            </MobileCardContent>
            <MobileCardContent>
              <strong>Role:</strong> {user.role}
            </MobileCardContent>
            <MobileCardContent>
              <strong>Deposit:</strong> ₹{user.deposit}
            </MobileCardContent>
            <MobileCardContent>
              <strong>Total Amount:</strong> ₹{user.totalAmount}
            </MobileCardContent>
            <MobileCardContent>
              <strong>Status:</strong> {user.status}
            </MobileCardContent>
            <ContainedButton
              padding="10px 5px"
              backgroundColor="#BF3131"
              border="1px solid #BF3131"
              onClick={() => openModal(user)}
            >
              Edit
            </ContainedButton>
          </MobileCard>
        ))}
      </MobileView>
      {isModalOpen && <FormModal user={selectedUser} closeModal={closeModal} />}
    </>
  );
};

export default Table;
