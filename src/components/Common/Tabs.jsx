import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Define your theme
const theme = {
  primaryColor: '#333'
};

// Styled components for the tabs
const TabsContainer = styled.div`
box-sizing: border-box;
  display: flex;
  width: 100%;
  border: 1px solid #333;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Tab = styled.div`
flex-grow: 1;
text-align: center;
  padding: 10px 20px;
  cursor: pointer;
  color: ${props => props.active ? '#fff' : '#333'};
  border-radius: 5px;
  transition: color 0.3s;
  background-color: ${props => props.active ? props.theme.primaryColor : 'transparent'};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 3px;
    background-color: ${props => props.active ? props.theme.primaryColor : 'transparent'};
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

// Tabs component
export const Tabs = ({ tabs, activeTab, onTabChange }) => {
    const handleTabClick = (tabId) => {
      onTabChange(tabId); // Call the onTabChange function passed from the parent
    };
  
    return (
      <ThemeProvider theme={theme}>
        <TabsContainer>
          {tabs?.map(tab => (
            <Tab
              key={tab.id}
              active={activeTab === tab?.id}
              onClick={() => handleTabClick(tab?.id)}
            >
              {tab.label}
            </Tab>
          ))}
        </TabsContainer>
      </ThemeProvider>
    );
  };
