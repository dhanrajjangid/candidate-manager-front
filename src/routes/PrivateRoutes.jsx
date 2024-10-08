import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import MobileMenuButton from "@/components/MenuButton";
import Home from "@/view/Home";
import { useDispatch } from "react-redux";
import { actions } from "@/redux/slices/sidebarSlice";
import { actions as authActions } from "@/redux/slices/authSlice";
import CreateUser from "@/view/CreateUser";
import Profile from "@/view/Profile";

import Chat from "@/view/Chat";

const PrivateLayout = ({ children }) => {
  const dispatch = useDispatch();
  const storedUser = localStorage.getItem("user");

  useEffect(() => {
    // Check localStorage for user data and dispatch login action if user is found
    if (storedUser) {
      dispatch(authActions.login(JSON.parse(storedUser)));
    }
  }, [storedUser]);

  return storedUser ? (
    <div style={{ height: "100vh", display: "flex" }}>
      <Sidebar />
      <div
        style={{
          boxSizing: "border-box",
          padding: "0.5rem",
          width: "100%",
          position: "relative",
        }}
      >
        <MobileMenuButton />
        <div
          style={{
            boxSizing: "border-box",
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto",
            marginTop: "50px",
          }}
          onClick={() => dispatch(actions.toggleSidebar(false))}
        >
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

const privateRoutes = [
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/create-user",
        element: <CreateUser />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
    ],
  },
];

export default privateRoutes;
