import React from "react";
import Test from "./Test";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Translate } from "@mui/icons-material";

const Title = styled("h1")(() => ({
  textAlign: "center",
  color: "#ed563d",
  marginBottom: "100px",
  fontSize: "45px",
  marginTop: "0",
}));

const StyledCard = styled("div")(() => ({
  width: "350px",
  border: "5px solid ",
  borderRadius: "15px 0",
  boxShadow: "2px 2px 15px 5px #E5E4E2",
  backgroundColor: "#E5E4E2",
  // margin: "25px",
}));
const Testimonials = () => {
  return (
    <section style={{ paddingTop: "30px" }}>
      <Container sx={{ height: "100vh" }}>
        <Title>TESTIMONIALS</Title>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {Test.map((val, i) => {
            return (
              <>
                <StyledCard>
                  <Box sx={{ height: "100px", position: "relative" }}>
                    <img
                      style={{
                        width: "120px",
                        height: "120px",
                        position: "absolute",
                        borderRadius: "150px",
                        border: "10px solid #fff",
                        boxShadow: "0px 0px 0px 15px  #E5E4E2",

                        top: "-65%",
                        left: "30%",
                        // transform: Translate("-50%", "-50%"),
                        transform: "Translate(50%-50%)",
                      }}
                      src={val.avatar}
                    />
                  </Box>
                  <Typography sx={{ padding: "10px" }}>
                    <span
                      style={{
                        padding: "0 15px",
                        fontSize: "50px",
                        color: "#ed563d",
                      }}
                    >
                      "
                    </span>
                    {val.description}{" "}
                    <span
                      style={{
                        padding: "0 15px",
                        fontSize: "50px",
                        color: "#ed563d",
                      }}
                    >
                      "
                    </span>
                  </Typography>

                  <Typography
                    sx={{
                      padding: "10px",
                      display: "inline",
                      fontSize: "20px",
                    }}
                  >
                    {val.name}
                  </Typography>
                  <Typography sx={{ padding: "10px", display: "inline" }}>
                    {val.age}
                  </Typography>
                  <Typography sx={{ padding: "10px", display: "inline" }}>
                    {val.designation}
                  </Typography>
                </StyledCard>
              </>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default Testimonials;
