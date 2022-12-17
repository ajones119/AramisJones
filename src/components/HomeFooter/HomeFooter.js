import React from 'react';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid } from '@mui/material';
import { NavigationButton } from '../NavigationButton/NavigationButton';

export const HomeFooter = () => {
    return (
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <NavigationButton
            content={<GitHubIcon color="tertiary" fontSize="large" />}
            to="https://github.com/ajones119?tab=repositories"
            toExternal
          />
        </Grid>
        <Grid item>
          <NavigationButton
            content={<LinkedInIcon color="tertiary" fontSize="large" />}
            to="https://www.linkedin.com/in/aramis-jones-904b2b1ba/"
            toExternal
          />
        </Grid>
        <Grid item>
          <NavigationButton
            content={<GitHubIcon color="tertiary" fontSize="large" />}
            to="https://github.com/ajones119?tab=repositories"
            toExternal
          />
        </Grid>
        <Grid item></Grid>
      </Grid>
    );
}