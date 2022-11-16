import { styled } from "@mui/styles";

import Box from "@mui/material/Box";
import React from "react";
import { NavLink } from "react-router-dom";
import videoBg from "../../../assets/gym-video.mp4";
import Button from "@mui/material/Button";

const CusLink = styled(NavLink)({
  textDecoration: "none",
  marginRight: "10px",
  marginLeft: "10px",
  color: "#fff",
  padding: "12px 20px",
  backgroundColor: "#ed563b",
  transition: "all 0.3s",
  margin: "10px 0px",
  "&:hover": {
    backgroundColor: "#f9735b",
  },
});

const H6 = styled("h6")({
  marginTop: 0,
  fontSize: "18px",
  fontWeight: 800,
  color: "#fff",
  letterSpacing: "0.5px",
  marginBottom: 0,
  textTransform: "uppercase",
});

const H2 = styled("h2")({
  marginTop: "30px",
  marginBottom: "25px",
  fontSize: "76px",
  textTransform: "uppercase",
  fontWeight: 800,
  color: "#fff",
  letterSpacing: "1px",
});

const Home = () => {
  return (
    <Box sx={{ position: "relative", height: "90vh" }}>
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        height="100%"
        width="100%"
        style={{ objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          bottom: "0px",
          backgroundColor: "rgba(35, 45, 57, 0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <H6>The Healthy Way of life</H6>
          <H2>
            easy with our <span style={{ color: "#ed563b" }}>gym</span>
          </H2>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CusLink end to="/" style={{ width: "150px" }}>
              Login
            </CusLink>
            <CusLink end to="/" style={{ width: "150px" }}>
              Register
            </CusLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
