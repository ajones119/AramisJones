import React from 'react';
import SELF2 from "../../images/IMG-0104.jpg";
import {  Nav, Navbar } from "react-bootstrap";
import { Avatar } from "@mui/material";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect fixed="top" expand="sm">
        <Navbar.Brand href="#/AramisJones">
          <Avatar
            src={SELF2}
            alt="Avatar"
            className="headerPicture"
            sx={{ width: 50, height: 50 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/AramisJones">Home</Nav.Link>
            <Nav.Link href="#/AramisJones/WorkAndEducation">
              Work and Education
            </Nav.Link>
            <Nav.Link href="#/AramisJones/PastProjects">
              Past Projects
            </Nav.Link>
            <Nav.Link href="#/AramisJones/ContactInfo">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
