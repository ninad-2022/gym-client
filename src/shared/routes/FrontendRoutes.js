import About from "../../features/frontend/about/About";
import BmiCalculator from "../../features/frontend/bmi-calculator/BmiCalculator";
import Contact from "../../features/frontend/contact/Contact";
import Home from "../../features/frontend/home/Home";
import Membership from "../../features/frontend/membership/Membership";
import Schedule from "../../features/frontend/shedules/Schedule";

const routes = [
  {
    label: "Home",
    path: "/",
    component: <Home />,
  },
  {
    label: "About",
    path: "/about",
    component: <About />,
  },
  {
    label: "Membership",
    path: "/membership",
    component: <Membership />,
  },
  {
    label: "Contact Us",
    path: "/contact",
    component: <Contact />,
  },
  {
    label: "Contact Us",
    path: "/contact",
    component: <Schedule />,
  },
];

export default routes;
