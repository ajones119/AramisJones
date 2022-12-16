import { Avatar, Grid, Typography } from '@mui/material';
import { height } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './HomeHeader.css'
import { PICTURES, TITLES } from './HomeHeaderConsts';

function getNewPicIndex(currentIndex) {
  if (currentIndex >= PICTURES.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  return currentIndex;
}

function getTitlesAsFormattedString() {
  let titlesAsFormattedString = ""

  TITLES.forEach((titles) => {
    const index = Math.floor(Math.random() * titles.length);
    titlesAsFormattedString += `${titles[index]} | `;
  })

  return titlesAsFormattedString.slice(0, -2);
}

export const HomeHeader = () => {
  const [picIndex, setPicIndex] = useState(0);
  const [titles, ] = useState(getTitlesAsFormattedString());

  useEffect(() => {
    const interval = setInterval(() => {
      setPicIndex(getNewPicIndex(picIndex))
    }, 7400); //perfect timing here
    console.log(interval)
    return () => clearInterval(interval);
  }, [picIndex])

    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar src={PICTURES[picIndex]} alt="Avatar" className="headerPicture" sx={{ width: 400, height: 400 }} />
        <Typography variant="h4" color="primary"style={{ paddingTop: "25px" }} >
          {titles}
        </Typography>
      </Grid>
    );
}