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
const FullLayout = () => {
  return (
    <>
      <ResponsiveDrawer />
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/about" element={<About />} />;
        <Route path="/membership" element={<Membership />} />;
        <Route path="/image-gallary" element={<ImageGallery />} />;
        <Route path="/gym-schedule" element={<GymSchedule />} />;
        <Route path="/contact" element={<Contact />} />;
      </Routes>
    </>
  );
};

export default FullLayout;
