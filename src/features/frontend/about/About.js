import React from "react";
import { Container, Typography, Box, Item, Grid } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ height: "100%", width: "100%", bgcolor: "gray" }}>
      <Typography gutterBottom varient="h1" align="center">
        About us
      </Typography>
      <Container sx={{ width: "100%", bgcolor: "gray" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "#ED563B",
            height: "400px",
          }}
        >
          <Grid
            sx={{
              flexDirection: "row",
              p: 1,
              m: 1,
              width: "50%",
            }}
            xs={12}
            sm={6}
          >
            <Typography sx={{ color: "white" }} variant="h5">
              About Us:
            </Typography>
            <Typography variant="h6">Who Are We?</Typography>
            <Typography>
              We are oTypographyerating in Kamshet, Maharashtra and have been
              successfully running for several years. We provide high-quality
              fitness services from gym equipment to nutrition and proper
              supplementation. We are a team of certified trainers and fitness
              experts who are passionate about transforming your health and
              physique. Our motto is “Get Ready To Fit!”.
            </Typography>
            <Typography variant="h6">Why Join our Gym?</Typography>
            <Typography>
              Whenever you think about Gym, we want you to think about high
              quality. Our main objective is to provide you with a modern gym
              that includes top-notch equipment, expert fitness trainers who
              will guide you thoroughly until you reach your desired fitness
              goals and a clean & hygienic workout environment.
            </Typography>
          </Grid>
          <Grid
            sx={{
              flexDirection: "row",
              p: 1,
              m: 1,
              width: "50%",
            }}
            xs={12}
            sm={6}
          >
            <img
              src="http://www.roadtofitness.in/img/r2f-interior.jpg"
              style={{ width: "95%", height: "90%", p: "" }}
            />
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "white",
            height: "300px",
          }}
        >
          <Grid
            sx={{
              flexDirection: "row",
              p: 1,
              m: 1,
              width: "50%",
            }}
            xs={12}
            sm={6}
          >
            <img
              src="https://classicgym.in/wp-content/uploads/2021/06/facilities-banner-classic-gym-1.png"
              style={{ width: "95%", height: "90%" }}
            />
          </Grid>
          <Grid
            sx={{
              flexDirection: "row",
              p: 1,
              m: 1,
              width: "50%",
            }}
            xs={12}
            sm={6}
          >
            <Typography>Facilities:</Typography>
            <ul>
              <li>Changing Rooms.</li>
              <li>Kickboxing Zone.</li>
              <li>Lockers.</li>
              <li>Lockers.</li>
              <li>Steambath</li>
              <li>Body massagae</li>
              <li>Lounge Area.</li>
              <li>Water Dispenser. </li>
              <li>Wifi.</li>
            </ul>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "#ED563B",
            height: "300px",
          }}
        >
          <Grid
            sx={{
              flexDirection: "row",
              p: 1,
              m: 1,
              width: "50%",
            }}
            xs={12}
            sm={6}
          >
            <Typography>Equipment:</Typography>

            <ul>
              <li> Training bench</li>
              <li> Dumbbell set</li>
              <li> Treadmill</li>
              <li> Stationary bicycle</li>
              <li> Barbell Set</li>
              <li> Rowing machine</li>
              <li> Low-impact treadmills</li>
              <li> Ellipticals</li>
              <li> Balance trainers and resistance bands</li>
            </ul>
          </Grid>
          <Grid
            sx={{
              flexDirection: "row",
              p: 1,
              m: 1,
              width: "50%",
            }}
            xs={12}
            sm={6}
          >
            <img
              src="https://www.fitness-world.in/wp-content/uploads/2018/10/Blog-Banner.jpg"
              style={{ width: "95%", height: "90%" }}
            />
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "white",
            height: "300px",
          }}
        >
          <Grid
            sx={{
              flexDirection: "row",
              p: 1,
              m: 1,
              width: "50%",
            }}
            xs={12}
            sm={6}
          >
            <img
              src="https://thumbs.dreamstime.com/b/two-attractive-women-exercising-personal-trainers-two-attractive-women-exercising-personal-trainers-gym-122702382.jpg"
              style={{ width: "95%", height: "90%" }}
            />
          </Grid>
          <Grid
            sx={{
              flexDirection: "row",
              p: 1,
              m: 1,
              width: "50%",
            }}
            xs={12}
            sm={6}
          >
            <Typography>Trainer:</Typography>
            <Typography>
              A gym instructor is someone whose job it is to help other people
              improve their fitness. They are usually employed to work within a
              specific gym, providing support to gym members, often acting as
              the first person to show them around during their induction.
            </Typography>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "#ED563B",
            height: "300px",
          }}
        >
          <Grid
            sx={{
              flexDirection: "row",
              p: 1,
              m: 1,
              width: "50%",
            }}
            xs={12}
            sm={6}
          >
            <Typography>Nutritionist:</Typography>
            <Typography>
              A gym session or brisk walk can help. Physical activity stimulates
              various brain chemicals that may leave you feeling happier, more
              relaxed and less anxious. You may also feel better about your
              appearance and yourself when you exercise regularly, which can
              boost your confidence and improve your self-esteem.
            </Typography>
          </Grid>
          <Grid
            sx={{
              flexDirection: "row",
              p: 1,
              m: 1,
              width: "50%",
            }}
            xs={12}
            sm={6}
          >
            <img
              src="https://www.gmpfitness.com/wp-content/uploads/2017/12/gmp-fitness-holistic-nutrition-master.jpg"
              style={{ width: "95%", height: "90%" }}
            />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
