import React from 'react'
import { ImageList, Typography } from '@mui/material'
import ImageListItem from '@mui/material/ImageListItem'
import Grid from '@mui/material/Grid'
//import itemData from './itemData'
import Box from '@mui/material/Box'

const ImageGallary = () => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Grid container columns={{ xs: 4, sm: 12, md: 12 }}>
        {Array.isArray(itemData) &&
          itemData.map(({ img }, i) => {
            return (
              <Grid item xs={12} sm={4} md={3} key={i}>
                <img src={img} style={{ width: '100%', height: '100%' }} />
              </Grid>
            )
          })}
      </Grid>
    </Box>
  )
}

const itemData = [
  {
    img:
      'https://img.freepik.com/free-photo/couple-training-together-gym_651396-1076.jpg?w=996&t=st=1668055471~exp=1668056071~hmac=a02f7b614dbc22642ff68dd4aa9ece9a77e31965ef73269c8fc875b8c09b1a6d',
  },
  {
    img:
      'https://img.freepik.com/free-photo/handsome-shirtless-man-with-stylish-hair-muscular-ectomorph-body-doing-exercises-with-dumbbells-dark-textured-background_613910-18438.jpg?t=st=1668052822~exp=1668053422~hmac=203ce28438325c350425d2af7d42c4a2bee9ac7b114ddbc8a555cf381ca429e5',
  },
  {
    img:
      'https://img.freepik.com/premium-photo/female-yoga-instructor-trains-mat-modern-interior-fitness-club_283470-4040.jpg',
  },
  {
    img:
      'https://img.freepik.com/free-photo/bodybuilder-training-arm-with-resistance-band_7502-4758.jpg?w=996&t=st=1668055585~exp=1668056185~hmac=3091966cbac45d8fb184cc7cf68ba632876c4320e9e93824b4aa711b5179c5ae',
  },
  {
    img:
      'https://img.freepik.com/premium-photo/indian-asian-young-couple-is-working-out-gym-attractive-woman-handsome-fit-man-are-training-modern-gym-health-fitness-concept_466689-13752.jpg?w=996',
  },
  {
    img:
      'https://img.freepik.com/premium-photo/young-ripped-man-bodybuilder-with-perfect-abs-shoulders-biceps-triceps-chest-posing-with-dumbbell_136403-1032.jpg?w=996',
  },
  {
    img:
      'https://img.freepik.com/free-photo/beautiful-young-sporty-woman-training-workout-gym_155003-41224.jpg?w=996&t=st=1668055942~exp=1668056542~hmac=ded5716399af97dd1c90cfb42bbf48ac13fcbead0ede80f5b83b3f7347941746',
  },
  {
    img:
      'https://img.freepik.com/premium-photo/muscular-tattooed-bearded-male-exercising_136403-9395.jpg?w=996',
  },
  {
    img:
      'https://img.freepik.com/free-photo/studio-portrait-attractive-fitness-couple-holds-barbell-dumbbells-sit-wooden-box-dark-grey-background_613910-16339.jpg?w=996&t=st=1668055987~exp=1668056587~hmac=43a6e4403fa527d3bf7a4b4bf07af3c1b9ca24bf178ad061aaac19b1d1bd22a2',
  },
  {
    img:
      'https://img.freepik.com/free-photo/portrait-young-sportive-girl-training-with-dumbbells-isolated-blue-background-neon_155003-45614.jpg?w=1380&t=st=1668056133~exp=1668056733~hmac=e723571fc2b4bcbb18e7b2ec84b9ff523b2a592aa4c438672b437d88d60173ac',
  },
  {
    img:
      'https://img.freepik.com/free-photo/confident-young-muscular-caucasian-athlete-practicing-gym-with-weights-male-model-doing-strength-exercises-training-his-upper-body-wellness-healthy-lifestyle-bodybuilding-concept_155003-28006.jpg?t=st=1668052822~exp=1668053422~hmac=9cd5c40c6ba2dfb0728d5f534d8f59ebb17829933614329cb7d76ec62a76d740',
  },
  {
    img:
      'https://img.freepik.com/free-photo/attractive-young-woman-her-trainer-running-treadmill-gym_496169-2730.jpg?w=996&t=st=1668056190~exp=1668056790~hmac=35639fd545826c0319e193db4377d73fde327f07649308de793da352059e737f',
  },
]

export default ImageGallary
