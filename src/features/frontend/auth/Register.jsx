import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import UserServices from "../../../services/UserServices";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const theme = createTheme();

const Register = () => {
  const StyledLink = styled(NavLink)(() => ({
    cursor: "pointer",
    textDecoration: "none",
    color: "#232d39",
    fontSize: "17px",
  }));

  const StyledButton = styled(NavLink)(() => ({
    width: "100%",
    padding: "8px",
    cursor: "pointer",
    textDecoration: "none",
    color: "#eee",
    fontSize: "18px",
    borderRadius: "10px",
    backgroundColor: "#232d39",
    display: "block",
    textAlign: "center",
    margin: "8px 0",
  }));

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: {
      first: "",
      last: "",
    },
    mobile: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;

    if (user?.name)
      setUser({ ...user, name: { ...user?.name, [name]: value } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User", user);

    const fd = new FormData();
    fd.append("name.first", user.name?.first);
    fd.append("name.last", user.name?.last);
    fd.append("email", user.email);
    fd.append("password", user.password);
    fd.append("role", user.role);
    fd.append("mobile", user.mobile);

    UserServices.createUser(fd)
      .then((response) => {
        const message = response.data.message || "created";
        alert(message);

        navigate("/");
      })
      .catch((err) => {
        const message = err.response.data.message || "Not Created";
        alert(message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Paper>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px 30px",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#232d39" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography sx={{ color: "#232d39" }} variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="first"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={user.name?.first}
                    onChange={handleNameChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="last"
                    id="lastName"
                    label="Last Name"
                    autoComplete="family-name"
                    value={user.name?.last}
                    onChange={handleNameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile Number"
                    name="mobile"
                    autoComplete="mobile"
                    value={user.mobile}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    sx={{ color: "#232d39" }}
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <StyledButton onClick={handleSubmit}>Register</StyledButton>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <StyledLink to="/login">
                    Already have an account? Sign in
                  </StyledLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
