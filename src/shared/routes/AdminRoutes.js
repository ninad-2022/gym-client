import { lazy } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UsersIcon from "@mui/icons-material/People";
import MembersIcon from "@mui/icons-material/CardMembership";
import TrainerIcon from "@mui/icons-material/TrainRounded";

const Dashboard = lazy(() =>
  import("../../features/admin/dashboard/Dashboard")
);
const Customers = lazy(() => import("../../features/admin/customer/Customer"));
const MembershipList = lazy(() =>
  import("../../features/admin/membership/MembershipList")
);
const ContactUs = lazy(() =>
  import("../../features/admin/contactus/Contactus")
);

// import Dashboard from "../../features/admin/dashboard/Dashboard";
// import ContactUs from "../../features/admin/contactus/Contactus";
// import Customers from "../../features/admin/customer/Customer";
// import MembershipList from "../../features/admin/membership/MembershipList";

export default [
  {
    label: "Dashboard",
    path: "",
    showInMenu: true,
    component: <Dashboard />,
    icon: <DashboardIcon />,
    role: ["superadmin", "admin", "customer"],
    hasSubRoutes: false,
  },

  {
    label: "Customer",
    path: "customer",
    showInMenu: true,
    component: <Customers />,
    icon: <UsersIcon />,
    role: ["superadmin", "admin"],
    hasSubRoutes: false,
  },
  {
    label: "Membership",
    path: "membership",
    showInMenu: true,
    component: <MembershipList />,
    icon: <MembersIcon />,
    role: ["superadmin", "admin"],
    hasSubRoutes: false,
  },

  {
    label: "Enquiry",
    path: "contactus",
    showInMenu: true,
    component: <ContactUs />,
    icon: <TrainerIcon />,
    role: ["superadmin", "admin"],
    hasSubRoutes: false,
  },
];
