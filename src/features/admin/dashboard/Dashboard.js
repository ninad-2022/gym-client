import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import MembershipServices from "../../../services/MembershipService";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import RegisterServices from "../../../services/RegisterService";
import { removeUser, selectUser } from "../../../app/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserFromRedux = useSelector(selectUser);
  const { name, email, mobile } = getUserFromRedux;

  const [plans, setPlans] = useState([]);
  // console.log("PLa", plans);

  const [selected, setSelected] = useState({
    name: name,
    email: email,
    mobile: mobile,
    pack: "",
  });

  const handleLogout = () => {
    dispatch(removeUser());
    sessionStorage.clear();
    navigate("/");
  };

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
  const handleChange = (e) => {
    const { value } = e.target;
    setSelected({ ...selected, pack: value });
  };

  const pak = selected.pack;
  const handleSubmit = () => {
    RegisterServices.createRegister(selected)
      .then((response) => {
        alert(`Your Successfully Registerd ${pak} Package`);
      })
      .catch((err) => {
        alert("Not Registered or Select Only One");
      });
    handleLogout();
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
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Choose Your Package
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              {Array.isArray(plans) &&
                plans.map((val, i) => (
                  <FormControlLabel
                    value={val.title}
                    control={<Radio />}
                    label={val.title}
                    onChange={handleChange}
                  />
                ))}
            </RadioGroup>
          </FormControl>
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
