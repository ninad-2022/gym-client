import React from 'react'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import ThemeProvider from 'react-bootstrap/ThemeProvider'

const About = () => {
  return (
    <>
      <div className="box  image align-item-between ">
        {/*Gym Info*/}
        <div className="container">
          <div className="row bg_row pt-5">
            <div className="col">
              <h2 className="headtext">About Us:</h2>
              <h4>Who Are We?</h4>
              <p>
                We are operating in Kamshet, Maharashtra and have been
                successfully running for several years. We provide high-quality
                fitness services from gym equipment to nutrition and proper
                supplementation. We are a team of certified trainers and fitness
                experts who are passionate about transforming your health and
                physique. Our motto is “Get Ready To Fit!”.
              </p>
              <h4>Why Join our Gym?</h4>
              <p>
                Whenever you think about Gym, we want you to think about high
                quality. Our main objective is to provide you with a modern gym
                that includes top-notch equipment, expert fitness trainers who
                will guide you thoroughly until you reach your desired fitness
                goals and a clean & hygienic workout environment.
              </p>
            </div>
            <div className="col">
              <img
                src="http://www.roadtofitness.in/img/r2f-interior.jpg"
                style={{ width: '95%', height: '90%' }}
              />
            </div>
          </div>
        </div>
        <br />
        {/*Facilities*/}
        <div className="container">
          <div className="row bg_row pt-5">
            <div className="col">
              <img
                src="https://classicgym.in/wp-content/uploads/2021/06/facilities-banner-classic-gym-1.png"
                style={{ width: '95%', height: '90%' }}
              />
            </div>
            <div className="col">
              <h2 className="headtext">Facilities:</h2>
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
            </div>
          </div>
        </div>
        <br />

        {/*Equipment*/}
        <div className="container">
          <div className="row bg_row pt-5">
            <div className="col">
              <h2 className="headtext">Equipment:</h2>

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
            </div>
            <div className="col">
              <img
                src="https://www.fitness-world.in/wp-content/uploads/2018/10/Blog-Banner.jpg"
                style={{ width: '95%', height: '90%' }}
              />
            </div>
          </div>
        </div>
        <br />
        {/*Trainer */}
        <div className="container">
          <div className="row bg_row pt-5">
            <div className="col">
              <img
                src="https://thumbs.dreamstime.com/b/two-attractive-women-exercising-personal-trainers-two-attractive-women-exercising-personal-trainers-gym-122702382.jpg"
                style={{ width: '95%', height: '90%' }}
              />
            </div>
            <div className="col" xs={6}>
              <h2 className="headtext">Trainer:</h2>
              <p>
                A gym instructor is someone whose job it is to help other people
                improve their fitness. They are usually employed to work within
                a specific gym, providing support to gym members, often acting
                as the first person to show them around during their induction.
              </p>
            </div>
          </div>
        </div>
        <br />

        {/*Nutritionist*/}
        <div className="container">
          <div className="row bg_row pt-5">
            <div className="col">
              <h2 className="headtext">Nutritionist:</h2>
              <p>
                A gym session or brisk walk can help. Physical activity
                stimulates various brain chemicals that may leave you feeling
                happier, more relaxed and less anxious. You may also feel better
                about your appearance and yourself when you exercise regularly,
                which can boost your confidence and improve your self-esteem.
              </p>
            </div>
            <div className="col">
              <img
                src="https://www.gmpfitness.com/wp-content/uploads/2017/12/gmp-fitness-holistic-nutrition-master.jpg"
                style={{ width: '95%', height: '90%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
