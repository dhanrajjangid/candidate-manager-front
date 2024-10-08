// routerConfig.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "@/routes/PublicRoutes";
import privateRoutes from "@/routes/PrivateRoutes";

const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);

export default router;
