import { Grid, Typography } from '@mui/material';
import React from 'react';
import { NavigationButton } from '../NavigationButton/NavigationButton';

export const HomeNavButtons = () => {
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <NavigationButton
            to="/AramisJones/WorkAndEducation"
            content={<Typography variant="h2">Resume</Typography>}
          />
        </Grid>
        <Grid item>
          <NavigationButton
            to="/AramisJones/PastProjects"
            content={
              <Typography variant="h2">Other things I've worked on</Typography>
            }
          />
        </Grid>
        <Grid item>
          <NavigationButton
            to="/AramisJones/ContactInfo"
            content={<Typography variant="h2">Contact me</Typography>}
          />
        </Grid>
      </Grid>
    );
}