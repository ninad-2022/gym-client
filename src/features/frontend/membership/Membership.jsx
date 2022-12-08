import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
// import plans from "./plans";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { NavLink } from "react-router-dom";
import MembershipServices from "../../../services/MembershipService";

const Membership = () => {
  const [plans, setPlans] = useState([]);
  console.log("PLa", plans);

  const AllMembership = () => {
    MembershipServices.getAllMembership()
      .then((res) => {
        setPlans(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    AllMembership();
  }, []);

  const StyledDiv = styled("div")(() => ({
    width: "280px",
    border: "1px solid #999",
    borderRadius: "15px 0",
    padding: 5,
    margin: 12,
    padding: "10px",
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
          color: "#fff",
          fontWeight: "700",
          letterSpacing: "1.5px",
        }}
        variant="h3"
        align="center"
      >
        MEMBERSHIP <span style={{ color: "#ed563b" }}>PLAN'S</span>
      </Typography>
      <Typography
        sx={{
          paddingTop: "10px",
          color: "#fff",
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
        {Array.isArray(plans) &&
          plans.map((val, i) => {
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
                      fontSize: "30px",
                    }}
                  >
                    ₹{val.price}
                  </Typography>

                  <Typography variant="h7">
                    {val.facilites.map((val, i) => {
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
                    <StyledButton to="/register">
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
