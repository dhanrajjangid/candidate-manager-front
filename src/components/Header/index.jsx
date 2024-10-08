// Header.js
import React from 'react';
import styled, { css } from 'styled-components';
import { MdMenu } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { actions } from '@/redux/slices/sidebarSlice'
import { useSelector } from 'react-redux';

const HeaderContainer = styled.header`
  box-sizing: border-box;
  height: 5vh;
  color: #0D0D0D;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 3px rgba(0,0,0,.1);
  padding: 15px 10px;
  background: #f4f4f4;
  border: none;
  border-radius: 0;
`;

const MenuButton = styled.button`
  border: none;
  cursor: pointer;
`;

const CompanyName = styled.div`
  font-size: 1.5rem;
`;

const Header = () => {
  const isOpen = useSelector((state)=> state.sidebar.open)
  const dispatch = useDispatch()

  const toggleSidebar = () => {
    dispatch(actions.toggleSidebar())
  }

  return (
    <HeaderContainer className={isOpen ? 'no-shrink' : ''}>
      {/* <CompanyName>Test Design</CompanyName> */}
      {/* <MdMenu style={{cursor: "pointer"}} size={32} onClick={()=> toggleSidebar()}/> */}
    </HeaderContainer>
  );
};

export default Header;
