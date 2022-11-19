import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Route, NavLink, Routes } from "react-router-dom";
import routes from "../../shared/routes/FrontendRoutes";

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        GymBro
      </Typography>
      <Divider />
      <List>
        {/* for responsive drawer */}
        {routes
          //   .filter((route) => {
          //     console.log(route.authenticated, " => ", loggedUser._id);

          //     if (route.authenticated == "both") return true;
          //     else if (route.authenticated == "yes" && loggedUser._id)
          //       return true;
          //     else if (route.authenticated == "no" && !loggedUser._id)
          //       return true;
          //     else return false;
          //   })
          .map(({ path, label }) => (
            <ListItem key={path} disablePadding>
              <NavLink //change from here
                end
                to={path}
                style={({ isActive }) => ({
                  width: "100",
                  color: isActive ? "red" : "#000",
                })}
              >
                <ListItemButton sx={{ paddingLeft: 1 }}>
                  <ListItemText primary={label} />
                </ListItemButton>
              </NavLink>
            </ListItem>
            //change to here
          ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    // justifyContent: "center"
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "orange" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            GymBro
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {routes
              //   .filter((route) => {
              //     console.log(route.authenticated, " => ", loggedUser._id);

              //     if (route.authenticated == "both") return true;
              //     else if (route.authenticated == "yes" && loggedUser._id)
              //       return true;
              //     else if (route.authenticated == "no" && !loggedUser._id)
              //       return true;
              //     else return false;
              //   })
              .map(({ path, label }) => (
                <NavLink //change from here
                  end
                  key={path}
                  to={path}
                  style={({ isActive }) => ({
                    color: isActive ? "#aaa" : "#fff",
                    margin: 4,
                    textDecoration: "none",
                  })}
                >
                  {label}
                </NavLink> //to here
              ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
        {/* taking routes here  */}
        <Routes sx={{}}>
          {Array.isArray(routes) &&
            routes.map(({ path, component }, i) => (
              <Route key={path + i} path={path} element={component} />
            ))}
        </Routes>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
