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
    color: "white",
    "&:nth-child(even)": {
      backgroundColor: "#ed563b",
    },
    "&:nth-child(odd)": {
      backgroundColor: "#232d39",
    },
  }));
  const StyledButton = styled(NavLink)(() => ({
    backgroundColor: "white",
    width: "100%",
    padding: "5px",
    cursor: "pointer",
    textDecoration: "none",
    color: "#232d39",
    fontSize: "18px",
  }));

  return (
    <>
      <Typography sx={{ color: "black" }} variant="h3" align="center">
        MEMBERSHIP PLAN'S
      </Typography>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "30px",
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
                  sx={{ marginBottom: "10px" }}
                >
                  {val.price}
                </Typography>
                <Typography
                  sx={{ borderBottom: "2px solid #fff" }}
                ></Typography>
                <Typography variant="h7">
                  {val.facilities.map((val, i) => {
                    return (
                      <ul
                        style={{
                          display: "flex",
                          listStyle: "none",
                          margin: "10px 0 10px 0",
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
                  <StyledButton to="/">Register Here</StyledButton>
                </div>
              </StyledDiv>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Membership;
