import { Grid, Typography } from '@mui/material';
import React from 'react';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';
import { NavigationButton } from '../../components/NavigationButton/NavigationButton';

export const Home = () => {
    return (
      <div
        style={{ paddingTop: "50px", paddingLeft: "5px", paddingRight: "5px" }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item style={{ paddingBottom: "25px" }}>
            <HomeHeader />
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
              to="/AramisJones/ContactInfo"
              content={<Typography variant="h2">Contact me</Typography>}
            />
          </Grid>
        </Grid>
      </div>
    );
};