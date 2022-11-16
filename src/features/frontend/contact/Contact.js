import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";

function Contact() {
  return (
    <>
      <div className="contact">
        <Typography gutterBottom varient="h1" align="center">
          Contact us
        </Typography>

        {/* card design in center */}
        <Card sx={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
          <CardContent>
            {/* heading */}
            <Typography gutterBottom varient="h4">
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

            {/* form design */}
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="First Name"
                    placeholder="Enter first name"
                    varient="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Last Name"
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
                    placeholder="Enter phone number"
                    varient="outlined"
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
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Contact;
