import React from "react";
import { styled } from "@mui/material/styles";

const Card = () => {
  const StyledCard = styled("div")(() => ({
    display: "grid",
    gridTemplateColumns: "300px",
    gridTemplateRows: "210px 210px 80px",
    gridTemplateAreas: "image,text,stats",
    borderRadius: "18px",
    background: "white",
    boxShadow: "5px 5px 15px rgba(0,0,0,0.9)",
    textAlign: "center",
  }));
  return (
    <>
      <StyledCard>
        <div>
          <span>FIT</span>
          <h2>3000/ 1 Month</h2>
          <p>
            <li>Gym</li>
          </p>
        </div>
        <div>
          <button>Register Here</button>
        </div>
      </StyledCard>
    </>
  );
};

export default Card;
