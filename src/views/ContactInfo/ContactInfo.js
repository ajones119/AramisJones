import { Grid, Typography } from "@mui/material";
import React from "react";

export const ContactInfo = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h1" color="secondary">
          Contact Me
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" color="primary">
          Email: agj1113@gmail.com
        </Typography>
      </Grid>
    </Grid>
  );
};
