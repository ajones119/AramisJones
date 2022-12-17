import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import { NavigationButton } from '../NavigationButton/NavigationButton';
import "./PastProjectList.css"

export const PastProjectListEntry = ({ pastProject }) => {
  const [modalPicture, setModalPicture] = useState("");
  const [isOpen, setIsOpen] = useState(false);


    return (
      <>
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
              {pastProject.url ? (
                <NavigationButton
                  to={pastProject.url}
                  toExternal
                  content={
                    <Typography variant="h6" color="secondary">
                      Go Here
                    </Typography>
                  }
                />
              ) : null}
            </Typography>
          </Grid>
          <Grid item style={{ paddingTop: "25px" }}>
            <Carousel>
              {pastProject.pictures.map((picture) => (
                <Carousel.Item interval={15000}>
                  <img
                    src={picture}
                    alt="projectPic"
                    className="images"
                    onClick={() => {
                      setIsOpen(true);
                      setModalPicture(picture);
                    }}
                  />
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
        <Modal show={isOpen} onHide={() => setIsOpen(false)} size="xl">
          <Modal.Body>
            <img
              src={modalPicture}
              alt="projectPic"
              className="modal-images"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </Modal.Body>
        </Modal>
      </>
    );
}