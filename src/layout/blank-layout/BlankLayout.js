import React from "react";
import { Routes, Route } from "react-router-dom";

import ResponsiveDrawer from "./NavBar";

import frontEndRoutes from "../../shared/routes/FrontendRoutes";

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
      </Routes>
    </>
  );
};

export default BlankLayout;
