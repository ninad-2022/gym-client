import React from 'react'
import { Box } from '@mui/material'
const About = () => {
  const data = [
    {
      heading: 'About Us:',
      content:
        ' Who Are We? We are operating in Kamshet, Maharashtra and have been successfully running for several years. We provide high-quality fitness services from gym equipment to nutrition and proper supplementation. We are a team of certified trainers and fitness experts who are passionate about transforming your health and physique. Our motto is"Get Ready To Fit!".',
      img: 'http://www.roadtofitness.in/img/r2f-interior.jpg',
    },
    {
      heading: 'Facilities:',
      content: 'We are operating in Kamshet, Maharashtra and have been',
      img: 'http://www.roadtofitness.in/img/r2f-interior.jpg',
    },
    {
      heading: 'About Us',
      content: 'We are operating in Kamshet, Maharashtra and have been',
      img: 'http://www.roadtofitness.in/img/r2f-interior.jpg',
    },
  ]
  return (
    <>
      <h1>About</h1>
      <Box>
        {data.map(({ heading, content, img }, index) => (
          <div key={index}>
            <h1>{heading}</h1>
            <h1>{content}</h1>
            <img src={img} />
          </div>
        ))}
      </Box>
    </>
  )
}

export default About
