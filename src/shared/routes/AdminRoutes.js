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
const Trainer = lazy(() => import("../../features/admin/trainers/Trainer"));

// import Dashboard from "../../features/admin/dashboard/Dashboard";
// import Trainer from "../../features/admin/trainer/Trainer";
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
    // hasSubRoutes: false,
  },

  {
    label: "Customer",
    path: "customer",
    showInMenu: true,
    component: <Customers />,
    icon: <UsersIcon />,
    role: ["superadmin", "admin"],
    // hasSubRoutes: false,
  },
  {
    label: "Membership",
    path: "membership",
    showInMenu: true,
    component: <MembershipList />,
    icon: <MembersIcon />,
    role: ["superadmin", "admin"],
    // hasSubRoutes: true,
  },

  {
    label: "Trainer",
    path: "trainer",
    showInMenu: true,
    component: <Trainer />,
    icon: <TrainerIcon />,
    role: ["superadmin", "admin"],
    // hasSubRoutes: true,
  },
];
