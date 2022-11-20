import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box>
      <Box
        sx={{
          color: "#ed563b",
          fontWeight: "700",
          letterSpacing: "2.5px",
          fontSize: 40,
          p: 4,
        }}
        align="center"
      >
        ABOUT
      </Box>
      <Box
        mx="auto"
        // height="400px"
        borderRadius="10px"
        sx={{
          boxShadow: "5px 5px 25px rgba(0,0,0,0.2)",
          width: { xs: "400px", md: "1000px" },
          padding: "20px",
          display: "flex",
          marginBottom: "40px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <img
          src="http://www.roadtofitness.in/img/r2f-interior.jpg"
          style={{ width: "400px", height: "300px" }}
        />
        <Box>
          <Typography
            align="center"
            sx={{ padding: "20px", fontWeight: 800, color: "#ed563b" }}
            variant="h"
          >
            ABOUT US
          </Typography>
          <Typography sx={{ padding: "20px" }}>
            <p
              style={{
                lineHeight: "1.3",
                textAlign: "justify",
                textIndent: 50,
              }}
            >
              Our Fitness Journey began in the year 2020 and as the name goes
              Health and Heaven. In this short period, We have taken special
              efforts and made it our specialty to make practical &
              result-oriented fitness programs. We have trained dedicated
              fitness professionals with real-world experience in the field to
              help you achieve your desired fitness goals. And we have a key
              factor that makes us different from others is Our Fitness Programs
              which are developed to avoid future injuries & also we have the
              expertise to deal with Physical Injuries. Our Yoga programs help
              to improve mental health. We are committed to providing a healthy
              way of life to our clients which makes our fitness studio a
              Health's Heaven. We proud to share that 400+ members have achieved
              their fitness goals with Health & Heaven and still counting.
            </p>
          </Typography>
        </Box>
      </Box>
      <Box
        mx="auto"
        // height="400px"
        borderRadius="10px"
        sx={{
          boxShadow: "5px 5px 25px rgba(0,0,0,0.2)",
          width: { xs: "400px", md: "1000px" },
          padding: "20px",
          display: "flex",
          marginBottom: "40px",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#ed563b",
        }}
      >
        <Box sx={{ color: "white" }}>
          <Typography sx={{ padding: "20px", fontWeight: 800 }} variant="h">
            FACILITIES
          </Typography>

          <Typography sx={{ padding: "20px" }}>
            <ul
              style={{
                listStyle: "square",
                paddingRight: "390px",
              }}
            >
              <li>Changing Rooms</li>
              <li>Kickboxing Zone</li>
              <li>Lockers</li>
              <li>Lockers</li>
              <li>Steambath</li>
              <li>Body massagae</li>
              <li>Lounge Area</li>
              <li>Water Dispenser</li>
              <li>Wifi</li>
            </ul>
          </Typography>
        </Box>
        <img
          src="https://classicgym.in/wp-content/uploads/2021/06/facilities-banner-classic-gym-1.png"
          style={{ width: "400px", height: "300px" }}
        />
      </Box>
      <Box
        mx="auto"
        // height="400px"
        borderRadius="10px"
        sx={{
          boxShadow: "5px 5px 25px rgba(0,0,0,0.2)",
          width: { xs: "400px", md: "1000px" },
          padding: "20px",
          display: "flex",
          marginBottom: "40px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <img
          src="https://www.fitness-world.in/wp-content/uploads/2018/10/Blog-Banner.jpg"
          style={{ width: "400px", height: "300px" }}
        />
        <Box>
          <Typography
            sx={{ padding: "20px", fontWeight: 800, color: "#ed563b" }}
            variant="h"
          >
            EQUIPMENTS
          </Typography>
          <Typography sx={{ padding: "20px" }}>
            <ul style={{ listStyle: "square" }}>
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
          </Typography>
        </Box>
      </Box>
      <Box
        mx="auto"
        // height="400px"
        borderRadius="10px"
        sx={{
          boxShadow: "5px 5px 25px rgba(0,0,0,0.2)",
          width: { xs: "400px", md: "1000px" },
          padding: "20px",
          display: "flex",
          marginBottom: "40px",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#ed563b",
        }}
      >
        <Box sx={{ color: "white" }}>
          <Typography sx={{ padding: "20px", fontWeight: 800 }} variant="h">
            TRAINER
          </Typography>
          <Typography
            sx={{
              padding: "20px",
              paddingTop: "0",
              textAlign: "justify",
              lineHeight: "1.2",
            }}
          >
            <p>
              Personal Trainer & Group trainers : We have trained dedicated
              fitness Trainers with real-world experience in the field to help
              you achieve your desired fitness goals. They keeps you motivated
              through exercise and helps you to improve your proper workout.
            </p>
            <p>
              Yoga Instructor : Our Yoga Instructor help to improve mental
              health, focus, strength, balance and flexibility.
            </p>
            <p>
              Zumba Teacher : Our Zumba teacher boosts your cardio endurance,
              Tones the Body & much more with an enjoyable environment
            </p>
            <p>
              Kids Dance Teacher : Our Kids Dance Teacher helps your kid to
              learn dance as well as make them energetic.
            </p>
          </Typography>
        </Box>
        <img
          src="https://thumbs.dreamstime.com/b/two-attractive-women-exercising-personal-trainers-two-attractive-women-exercising-personal-trainers-gym-122702382.jpg"
          style={{ width: "400px", height: "300px" }}
        />
      </Box>
      <Box
        mx="auto"
        // height="400px"
        borderRadius="10px"
        sx={{
          boxShadow: "5px 5px 25px rgba(0,0,0,0.2)",
          width: { xs: "400px", md: "1000px" },
          padding: "20px",
          display: "flex",
          marginBottom: "40px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <img
          src="https://www.gmpfitness.com/wp-content/uploads/2017/12/gmp-fitness-holistic-nutrition-master.jpg"
          style={{ width: "400px", height: "300px" }}
        />
        <Box>
          <Typography
            sx={{ padding: "20px", fontWeight: 800, color: "#ed563b" }}
            variant="h"
          >
            NUTRITIONIST
          </Typography>
          <Typography sx={{ padding: "20px" }}>
            We have the best certified Nutritionist in our gym, They are
            specialist in personal fitness training and cannot be undermined.Our
            Nutrition specialist prepares fitness diet program for each and
            every member which is followed by the exerciser. The benefit of
            fitness training program can be seen only if the exerciser strictly
            follows nutrition program charted out by nutrition specialist.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
