import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import MemContext from "./MemContext";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import MembershipServices from "../../../services/MembershipService";

const MembershipForm = () => {
  const { open, handleClose, operation, initialMembership, loadMemberships } =
    useContext(MemContext);

  const [membership, setMembership] = useState({
    title: "",
    price: "",
    facilites: [],
  });

  // const [facilites, setFacilites] = useState([]);
  const [faci, setFaci] = useState("");

  const handleFacilityChange = (e) => {
    const { value } = e.target;
    setFaci(value);
  };
  const addFaci = () => {
    // facilites.push(faci);
    // setFacilites([...facilites, faci]);
    setMembership({
      ...membership,
      facilites: [...membership.facilites, faci],
    });
    console.log("FAC", membership);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMembership({ ...membership, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Membership: ", membership);

    // const fd = new FormData();

    // for (const prop of Object.keys(membership)) {
    //   fd.append(prop, membership[prop]);

    if (operation == "edit") {
      //update the membership
      MembershipServices.updateMembership(membership._id, membership)
        .then((response) => {
          loadMemberships();
          handleClose();
          alert("Membership updated");
        })
        .catch((err) => {
          alert("could not updated");
        });
    } else {
      // create the membership
      MembershipServices.createMembership(membership)
        .then((response) => {
          loadMemberships();
          handleClose();
          alert("Membership created");
        })
        .catch((err) => {
          alert("could not created");
        });
    }
  };

  useEffect(() => {
    if (initialMembership._id)
      setMembership({ ...membership, ...initialMembership });
  }, [initialMembership]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Title"
          name="title"
          value={membership.title}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Price/Month"
          name="price"
          value={membership.price}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex" }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Facilities"
          // name="facilites"
          // value={membership}
          onChange={handleFacilityChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addFaci}
          // disabled={!facilites}
        >
          Add
        </Button>
      </Grid>
      <Grid item xs={12}>
        {membership.facilites.map((faci) => faci).join(",")}
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {operation == "edit" ? "Update" : "Create"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default MembershipForm;
