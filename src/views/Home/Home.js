import { Grid, Typography } from '@mui/material';
import React from 'react';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';
import { NavigationButton } from '../../components/NavigationButton/NavigationButton';

export const Home = () => {
    return (
      <div style={{ paddingTop: "75px" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>circle pic here</Grid>
          <Grid item style={{ paddingBottom: "25px" }}>
            <HomeHeader />
          </Grid>
          <Grid item>
            <NavigationButton
              to="/AramisJones/AboutMe"
              content={
                <Typography variant="h2" component="h2">
                  About Me
                </Typography>
              }
            />
          </Grid>
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
                <Typography variant="h2">
                  Other things I've worked on
                </Typography>
              }
            />
          </Grid>
          <Grid item>
            <NavigationButton
              to="/AJ"
              content={<Typography variant="h2">Contact me</Typography>}
            />
          </Grid>
        </Grid>
      </div>
    );
};