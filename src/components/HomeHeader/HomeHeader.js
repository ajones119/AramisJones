import { Avatar, Grid, Typography } from '@mui/material';
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
    setTimeout(() => {
      setPicIndex(getNewPicIndex(picIndex));
    }, 8850); //perfect timing here
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPicIndex(getNewPicIndex(picIndex))
    }, 10000);
        
    return () => clearInterval(interval);
  }, [picIndex])

    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          src={PICTURES[picIndex]}
          alt="Avatar"
          className="headerPicture"
          sx={{ width: 350, height: 350 }} />
        <Typography
          variant="h4"
          color="primary"
          style={{ paddingTop: "25px", textAlign:"center" }}
        >
          {titles}
        </Typography>
      </Grid>
    );
}