import About from "../../features/frontend/about/About";
import BmiCalculator from "../../features/frontend/bmi-calculator/BmiCalculator";
import Contact from "../../features/frontend/contact/Contact";
import GymSchedule from "../../features/frontend/gym-schedule/GymSchedule";
import Home from "../../features/frontend/home/Home";
import ImageGallery from "../../features/frontend/image-gallery/ImageGallery";
import Membership from "../../features/frontend/membership/Membership";

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
    label: "Gallary",
    path: "/image-gallary",
    component: <ImageGallery />,
  },
  {
    label: "Schedule",
    path: "/gym-schedule",
    component: <GymSchedule />,
  },
  {
    label: "Contact Us",
    path: "/contact",
    component: <Contact />,
  },
];

export default routes;
