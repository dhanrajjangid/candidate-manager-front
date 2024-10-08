// Sidebar.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineAppstore,
  AiOutlineTeam,
  AiOutlineScan,
  AiOutlineBook,
  AiOutlineUser as AiOutlineUserProfile,
  AiOutlineLogout,
  AiOutlineSchedule
} from "react-icons/ai";
import ProfileImg from "@/assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";
import { actions } from "@/redux/slices/sidebarSlice";
import {
  SidebarContainer,
  SidebarNav,
  ProfilePhoto,
  SidebarItem,
  Icon,
  LogoutButton,
} from "./SidebarStyles";
import { actions as authActions } from "@/redux/slices/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector((state) => state.sidebar.open);
  const pathname = window.location.pathname;

  const handleNavigation = (path) => {
    navigate(path);
    dispatch(actions.toggleSidebar(!isOpen));
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate('/login')
  };

  const menuItems = [
    {
      title: "Home",
      path: "/home",
      icon: <AiOutlineHome />,
    },
    // {
    //   title: "Find Teams",
    //   path: "/team-listing",
    //   icon: <AiOutlineTeam  />,
    // },
    // {
    //   title: "Find Players",
    //   path: "/player-listing",
    //   icon: <AiOutlineScan />,
    // },
    // {
    //   title: "Products",
    //   path: "/products",
    //   icon: <AiOutlineShoppingCart  />,
    // },
    // {
    //   title: "Schedules",
    //   path: "/schedule-calender",
    //   icon: <AiOutlineSchedule />,
    // },
    {
      title: "Profile",
      path: "/profile",
      icon: <AiOutlineUserProfile />,
    },
    // {
    //   title: "Users",
    //   path: "/users",
    //   icon: <AiOutlineUser />,
    // },
    // {
    //   title: "Cart",
    //   path: "/cart",
    //   icon: <AiOutlineShoppingCart />,
    // },
    {
      title: "Add Candidate",
      path: "/create-user",
      icon: <AiOutlineUserAdd />,
    },
    {
      title: "Chat",
      path: "/chat",
      icon: <AiOutlineUserAdd />,
    },
    
    // {
    //   title: "Courses",
    //   path: "/courses",
    //   icon: <AiOutlineBook />,
    // },
    
    
  ];

  return (
    <SidebarContainer isopen={isOpen}>
      <SidebarNav>
        <div className="flex-center">
          <ProfilePhoto src={ProfileImg} alt="Profile" />
        </div>
        {menuItems.map((item, index) => {
          return (
            <SidebarItem
              key={index}
              active={pathname === item.path ? true : false}
              onClick={() => handleNavigation(item.path)}
            >
              <Icon>{item.icon}</Icon>
              {item.title}
            </SidebarItem>
          );
        })}
        <LogoutButton onClick={handleLogout}>
          <Icon>
            <AiOutlineLogout />
          </Icon>
          Logout
        </LogoutButton>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
