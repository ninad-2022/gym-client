import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import routes from "../../shared/routes/AdminRoutes";
import { NavLink } from "react-router-dom";
const SidebarMenu = ({ open }) => {
  return (
    <>
      <List>
        {Array.isArray(routes) &&
          routes
            .filter((route) => route.showInMenu)
            // .filter((route) => route.role.includes(loggedUser.role))
            .map(({ path, label, icon }, index) => (
              <ListItem
                key={path + "-" + index}
                disablePadding
                sx={{ display: "block" }}
              >
                <NavLink
                  end
                  to={
                    path
                    // == "rooms" && loggedUser.role === "customer"
                    //   ? "/rooms"
                    //   : path
                  }
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#777",
                  })}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
      </List>
    </>
  );
};

export default SidebarMenu;
