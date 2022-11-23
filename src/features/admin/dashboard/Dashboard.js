import React, { useEffect, useState } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/slices/authSlice";
import MembershipServices from "../../../services/MembershipService";

const Dashboard = () => {
  const getUserFromRedux = useSelector(selectUser);
  const { name, email, mobile } = getUserFromRedux;

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
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  // };

  const handleSubmit = () => {
    // console.log("user", user);
    // //dispatch an addUSer action with payload
    // if (operation == "edit") dispatch(upUserAction(user));
    // else dispatch(addUsers(user));
  };

  return (
    <Grid
      mx="auto"
      borderRadius="10px"
      sx={{
        boxShadow: "5px 5px 25px rgba(0,0,0,0.4)",
        width: { xs: "300px", md: "800px" },
        padding: "30px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="First Name"
            name="first_name"
            value={name.first}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Last Name"
            name="last_name"
            value={name.last}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            value={email}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={mobile}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
