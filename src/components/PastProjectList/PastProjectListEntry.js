import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./PastProjectList.css"

export const PastProjectListEntry = ({ pastProject }) => {
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          maxWidth: "75%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingBottom: "50px",
        }}
        key={pastProject.title}
      >
        <Grid item>
          <Typography variant="h3" color="secondary">
            {pastProject.title}
          </Typography>
        </Grid>
        <Grid item style={{ paddingTop: "25px" }}>
          <Carousel>
            {pastProject.pictures.map((picture) => (
              <Carousel.Item interval={15000}>
                <img src={picture} alt="projectPic" className="images" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Grid>
        <Grid item style={{ paddingTop: "25px" }}>
          <Typography
            variant="body2"
            color="primary"
            style={{ textAlign: "center" }}
          >
            {pastProject.description}
          </Typography>
        </Grid>
      </Grid>
    );
}