import React from "react";
import { Routes, Route } from "react-router-dom";
import AppBar from "./NavBar";
import routes from "../../shared/routes/FrontendRoutes";
import Home from "../../features/frontend/home/Home";
import About from "../../features/frontend/about/About";
import Membership from "../../features/frontend/membership/Membership";
import Contact from "../../features/frontend/contact/Contact";
import ResponsiveDrawer from "./NavBar";
import ImageGallery from "../../features/frontend/image-gallery/ImageGallery";
import GymSchedule from "../../features/frontend/gym-schedule/GymSchedule";
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
