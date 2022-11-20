import React from "react";
import { useState } from "react";
import "./bmi.css";

const BmiCalculator = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Your Under Weight! Please Join Our Gym");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Your Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Your Overweight! Please Join Our Gym");
    } else {
      setInfo("Your Obese! Please Join Our Gym");
    }
  };

  return (
    <>
      <div className="main">
        <h1>
          <em>Calculate</em> Your <em>BMI</em> Here
        </h1>
        <div className="main2">
          <input
            type="text"
            onChange={(e) => setHeight(e.target.value)}
            placeholder="height in cm"
          />
          <input
            type="text"
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight in kg"
          />
          <button onClick={handleBmi}>Calculate</button>
          <h2>{bmi}</h2>
          <p>{info}</p>
        </div>
      </div>
    </>
  );
};

export default BmiCalculator;
