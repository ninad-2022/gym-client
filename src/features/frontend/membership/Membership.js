import React from "react";
import Box from "@mui/material/Box";
import plans from "./plans";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { NavLink } from "react-router-dom";

const Membership = () => {
  const StyledDiv = styled("div")(() => ({
    width: "300px",
    border: "1px solid #999",
    borderRadius: "15px 0",
    padding: 5,
    margin: 15,
    padding: "15px",
    color: "#eee",
    transition: "0.3s linear",
    boxShadow: "5px 5px 15px rgba(0,0,0,0.6)",
    "&:nth-child(even)": {
      backgroundColor: "#ed563b",
    },
    "&:nth-child(odd)": {
      backgroundColor: "#eee",
      color: "#232d39",
    },
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "5px 5px 15px rgba(0,0,0,0.6)",
      // transition: "0.5s linear",
    },
    "StyledButton:nth-child(even)": {
      backgroundColor: "white",
    },
  }));
  const StyledButton = styled(NavLink)(() => ({
    width: "100%",
    padding: "8px",
    cursor: "pointer",
    textDecoration: "none",
    color: "#eee",
    fontSize: "18px",
    borderRadius: "10px 0",
    backgroundColor: "#232d39",
  }));

  return (
    <section style={{ backgroundColor: "rgba(35,45,57)" }}>
      <Typography
        sx={{
          paddingTop: "25px",
          color: "#eee",
          fontWeight: "700",
          letterSpacing: "1.5px",
        }}
        variant="h3"
        align="center"
      >
        MEMBERSHIP PLANS
      </Typography>
      <Typography
        sx={{
          paddingTop: "10px",
          color: "#eee",
          fontSize: "18px",
        }}
        align="center"
      >
        Join Us Now
      </Typography>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px 0",
          transition: "0.5s ease",
        }}
      >
        {plans.map((val, i) => {
          return (
            <>
              <StyledDiv>
                <Typography
                  align="center"
                  variant="h5"
                  sx={{ marginBottom: "10px" }}
                >
                  {val.title}
                </Typography>
                <Typography
                  align="center"
                  variant="h4"
                  sx={{
                    marginBottom: "10px",
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "15px",
                  }}
                >
                  {val.price}
                </Typography>
                {/* <Typography
                  sx={{ borderBottom: "2px solid rgba(35,45,57)" }}
                ></Typography> */}
                <Typography variant="h7">
                  {val.facilities.map((val, i) => {
                    return (
                      <ul
                        style={{
                          display: "flex",
                          listStyle: "none",
                          alignItems: "center",
                        }}
                      >
                        <CheckIcon sx={{ marginRight: "8px" }} />
                        <li key={val + i}>{val}</li>
                      </ul>
                    );
                  })}
                </Typography>
                <div style={{ display: "flex", textAlign: "center" }}>
                  <StyledButton to="/">
                    <div>Register Here</div>
                  </StyledButton>
                </div>
              </StyledDiv>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Membership;
