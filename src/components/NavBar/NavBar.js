import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {  Nav, Navbar } from "react-bootstrap";
import { Avatar } from "@mui/material";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect fixed="top" expand="sm">
        <Navbar.Brand href="#/AramisJones">
          <Avatar
            src={"/images/IMG-0104.jpg"}
            alt="Avatar"
            className="headerPicture"
            sx={{ width: 50, height: 50 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/AramisJones">Home</Nav.Link>
            <Nav.Link href="#/AramisJones/AboutMe">About Me</Nav.Link>
            <Nav.Link href="#/AramisJones/WorkAndEducation">
              Work and Education
            </Nav.Link>
            <Nav.Link href="#/AramisJones/PastProjects">
              Past Projects
            </Nav.Link>
            <Nav.Link href="#/AramisJones/WorkAndEducation">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
