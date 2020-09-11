import React from "react";
import Styled from '@emotion/styled';
import { Link } from "react-router-dom";

const LinkItem = Styled.li`
  display: inline;
  list-style-type: none;
  margin: 0;
  & > a { 
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    padding: 20px;
    display: inline-block;
  }
`;

const LinkList = Styled.ul`
  padding: 0;
  font-size: 2em;
  margin: 1.0rem 0;
  font-weight: 100;
`;

export const NavBar = () => (
  <LinkList>
    <LinkItem>
      <Link to="/">Home</Link>
    </LinkItem>
    <LinkItem>
      <Link to="/resume">Resume</Link>
    </LinkItem>
    <LinkItem>
      <Link to="/projects">Past Projects</Link>
    </LinkItem>
    <LinkItem>
      <Link to="/hobbies">Hobbies</Link>
    </LinkItem>
    <LinkItem>
      <Link to="/contact">Contact</Link>
    </LinkItem>
  </LinkList>
)