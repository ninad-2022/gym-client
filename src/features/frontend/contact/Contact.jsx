import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import ContactUsServices from "../../../services/ContactUsService";
import { styled } from "@mui/styles";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const EnqLink = styled(NavLink)({
    textDecoration: "none",
    // marginRight: "10px",
    // marginLeft: "10px",
    borderRadius: "8px",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    padding: "12px 0",
    backgroundColor: "#ed563b",
    width: "100%",
    fontSize: "18px",
    transition: "all 0.3s",
    textAlign: "center",
    margin: "10px 0px",
    "&:hover": {
      backgroundColor: "#f9735b",
    },
  });

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  };
  const [contactUs, setContactUs] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactUs({ ...contactUs, [name]: value });
    e.preventDefault();
  };
  const handleSubmit = () => {
    console.log("ContactUS:", contactUs);
    ContactUsServices.createContactUs(contactUs)
      .then((response) => {
        // loadMemberships();
        alert("Enquiry Sent");
      })
      .catch((err) => {
        alert("Enquiry not Sent");
      });
    setContactUs(initialState);
  };

  return (
    <Box>
      <Box
        sx={{
          color: "#ed563b",
          fontWeight: "700",
          letterSpacing: "2.5px",
          fontSize: 40,
          p: 4,
        }}
        align="center"
      >
        CONTACT US
      </Box>
      <Box
        mx="auto"
        // height="400px"
        borderRadius="10px"
        sx={{
          boxShadow: "5px 5px 25px rgba(0,0,0,0.2)",
          width: { xs: "400px", md: "1000px" },
          padding: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#232d39",
        }}
      >
        <Box
          marginTop="50px"
          sx={{
            width: {
              md: "50%",
              xs: "100%",
              // backgroundColor: "#232d39",
              color: "white",
            },
          }}
        >
          <h2 align="center">
            Get Trained Today -{" "}
            <span style={{ color: "#ed563b" }}>Join Us</span>
          </h2>

          <Box>
            <Typography marginLeft="10px" align="center" padding="20px">
              Call Us - <br /> +91 9970564544
            </Typography>
          </Box>
          <Box>
            <Typography marginLeft="10px" align="center" padding="20px">
              Email Us - <br />
              <a href="mailto:dhirajdpuri@gmail.com?body=My custom mail body">
                dhirajdpuri@gmail.com
              </a>
            </Typography>
          </Box>
          <Box>
            <Typography marginLeft="10px" align="center" padding="20px">
              Address - <br />
              Health & Heaven, Pari Company Road,Narhe, Pune-411041.
            </Typography>
          </Box>
        </Box>
        <Card
          sx={{
            maxWidth: 450,
            marginLeft: "5px",
            padding: "5px 5px",
          }}
        >
          <CardContent>
            <Typography gutterBottom varient="h4" color="#ed563b">
              Get in touch with us:
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              varient="body2"
              component="p"
            >
              Fill up the form and our team will get back to you in 24 hours.
            </Typography>

            {/* <form style={{ color: "white" }}> */}
            <Grid container spacing={1} sx={{ color: "white" }}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter first name"
                  varient="outlined"
                  name="firstName"
                  value={contactUs.firstName}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder="Enter last name"
                  varient="outlined"
                  name="lastName"
                  value={contactUs.lastName}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter email"
                  varient="outlined"
                  name="email"
                  value={contactUs.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  type="number"
                  label="Phone"
                  placeholder="Enter phone number"
                  varient="outlined"
                  name="mobile"
                  value={contactUs.mobile}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Enter message"
                  varient="outlined"
                  name="message"
                  value={contactUs.message}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item sx={{ display: "flex" }}>
                {/* <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={handleSubmit}
                  sx={{ bgcolor: "#ed563b" }}
                > */}
                <EnqLink onClick={handleSubmit}>
                  Send Enquiry
                  <ListItemIcon>
                    <SendIcon sx={{ margin: "0 auto", color: "white" }} />
                  </ListItemIcon>
                </EnqLink>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Contact;
