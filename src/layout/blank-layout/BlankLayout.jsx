import React from "react";
import { Routes, Route } from "react-router-dom";

import ResponsiveDrawer from "./NavBar";

import frontEndRoutes from "../../shared/routes/FrontendRoutes";
import Login from "../../features/frontend/auth/Login";
import Register from "../../features/frontend/auth/Register";

const BlankLayout = () => {
  return (
    <>
      <ResponsiveDrawer />
      <Routes>
        {frontEndRoutes.map(({ path, component }, i) => {
          return (
            <Route path={path} element={component} key={component + path + i} />
          );
        })}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default BlankLayout;
