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
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import TesContext from "./TesContext";
import axios from "axios";

const TestimonialForm = () => {
  const { open, handleClose, operation, initialTestimonial, loadTestimonials } =
    useContext(TesContext);

  const [testimonial, setTestimonial] = useState({});
  const [profilePic, setProfilePic] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial({ ...testimonial, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // convert binary to base64
    const reader = new FileReader();
    reader.onload = function () {
      setProfilePic(reader.result);
    };
    if (file) reader.readAsDataURL(file);

    setTestimonial({ ...testimonial, avatar: file });
  };

  const handleSubmit = () => {
    console.log("Testimonial: ", testimonial);

    const fd = new FormData();
    for (const prop of Object.keys(testimonial)) {
      fd.append(prop, testimonial[prop]);
    }

    if (operation == "edit") {
      axios
        .put(
          `http://localhost:8888/v1/testimonials/${testimonial._id}`,
          testimonial
        )
        .then((response) => {
          loadTestimonials();
          handleClose();
          alert("Testimonial updated");
        })
        .catch((err) => {
          alert("could not updated");
        });
    } else {
      // create the testimonial
      axios
        .post(`http://localhost:8888/v1/testimonials`, testimonial)
        .then((response) => {
          loadTestimonials();
          handleClose();

          alert("Testimonial created");
        })
        .catch((err) => {
          alert("could not created");
        });
    }
  };

  useEffect(() => {
    if (initialTestimonial._id)
      setTestimonial({ ...testimonial, ...initialTestimonial });
  }, [initialTestimonial]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          style={{
            width: 200,
            margin: "auto",
            marginBottom: 2,
            border: "2 solid #9999",
            position: "relative",
          }}
        >
          <IconButton sx={{ position: "absolute", right: 0, top: 0 }}>
            <label htmlFor="avatar">
              <EditIcon />
            </label>
          </IconButton>
          <img
            style={{ width: "100%" }}
            src={
              operation == "edit" && typeof testimonial.avatar == "string"
                ? `http://localhost:8888/${testimonial.avatar}`
                : profilePic
                ? profilePic
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            }
          ></img>
        </Box>
        <TextField
          sx={{ display: "none" }}
          id="avatar"
          type="file"
          fullWidth
          variant="outlined"
          label="Avatar"
          name="avatar"
          onChange={handleFileChange}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          name="name"
          value={testimonial.name}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Age"
          name="age"
          type="number"
          value={testimonial.age}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Designation"
          name="designation"
          value={testimonial.designation}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Description"
          name="description"
          value={testimonial.description}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {operation == "edit" ? "Update" : "Create"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default TestimonialForm;
