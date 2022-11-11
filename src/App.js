import logo from "./logo.svg";
import "./App.css";
import BmiCalculator from "./features/frontend/bmi-calculator/BmiCalculator";
import Membership from "./features/frontend/membership/Membership";
import FullLayout from "./layout/full-layout/FullLayout";

function App() {
  return (
    <>
      {/* <BmiCalculator /> */}
      <Membership />
      {/* <FullLayout /> */}
    </>
  );
}

export default App;
