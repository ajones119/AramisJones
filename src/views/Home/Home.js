import { Grid } from '@mui/material';
import React from 'react';
import { HomeFooter } from '../../components/HomeFooter/HomeFooter';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';
import { HomeNavButtons } from '../../components/HomeNavButtons/HomeNavButtons';

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
            <HomeNavButtons />
          </Grid>
          <Grid item>
            <HomeFooter />
          </Grid>
        </Grid>
      </div>
    );
};