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

const Contact = () => {
  return (
    <Box sx={{ backgroundColor: "#232d39" }}>
      <Box
        sx={{
          color: "#ed563b",
          fontWeight: "1000",
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

            <form style={{ color: "white" }}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="First Name"
                    name="first_name"
                    placeholder="Enter first name"
                    varient="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Last Name"
                    name="last_name"
                    placeholder="Enter last name"
                    varient="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Enter email"
                    varient="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="number"
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone number"
                    varient="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    placeholder="Enter message"
                    varient="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ bgcolor: "#ed563b" }}
                  >
                    Send Enquiry
                    <ListItemIcon>
                      <SendIcon sx={{ margin: "0 auto", color: "white" }} />
                    </ListItemIcon>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Contact;
