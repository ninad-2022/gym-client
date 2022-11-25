import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import { Link, NavLink } from "react-router-dom";
import routes from "../../shared/routes/FrontendRoutes";
import { styled } from "@mui/styles";

const CusLink = styled(NavLink)({
  textDecoration: "none",
  marginRight: "20px",
  marginLeft: "20px",
});

const MinNavLink = styled(Link)({
  textDecoration: "none",
  color: "#232d39",

  "&:hover": {
    color: "#ed563b",
  },
});

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        position: "sticky",
        top: 0,
        background: "rgba(250,250,250,1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <CusLink to="/">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  ml: 4,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#ed563b",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </CusLink>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "#232d39" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {routes.map(({ label, path }, i) => (
                  <MinNavLink
                    to={path}
                    key={path + i + label}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        width: "200px",
                        margin: "20px 0px",
                      }}
                    >
                      {label}
                    </Typography>
                  </MinNavLink>
                ))}
              </Menu>
            </Box>
            <CusLink to="/">
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#ed563b",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </CusLink>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 4 }}>
              {routes.map(({ label, path }, i) => (
                <CusLink
                  end
                  key={label + i}
                  to={path}
                  style={({ isActive }) => ({
                    width: "100",
                    color: isActive ? "#ed563b" : "#232d39",
                  })}
                >
                  {label}
                </CusLink>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
