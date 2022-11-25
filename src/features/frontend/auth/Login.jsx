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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import AuthService from "../../../services/AuthServices";
import { addUser } from "../../../app/slices/authSlice";
import { NavLink } from "react-router-dom";
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

const Login = () => {
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
    backgroundColor: "#ed563d",
    display: "block",
    textAlign: "center",
  }));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    AuthService.userLogin(user)
      .then((response) => {
        alert("Login Success");
        dispatch(addUser(response.data.data));
        navigate("/secured");
      })
      .catch((err) => {
        const message = err.response
          ? err.response.data.message
          : "Could not login";
        alert(message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Paper>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#ed563b" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography sx={{ color: "#ed563b" }} variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={user.email}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={user.password}
                onChange={handleChange}
              />
              <FormControlLabel
                sx={{ display: "block" }}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <StyledButton onClick={handleSubmit}>Sign In</StyledButton>
              <Grid container>
                <Grid item>
                  <StyledLink>Forgot password?</StyledLink>
                </Grid>
                <Grid item>
                  <StyledLink to="/register">
                    {"Don't have an account? Sign Up"}
                  </StyledLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
