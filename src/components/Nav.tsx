import React from "react";
import styled from 'styled-components';
// import { Link } from "react-router-dom";

export default function Nav(){
  return (
    <NavBar>
      <img src="" alt=""/>
      <ul>
        <li>home</li>
        <li>explore</li>
        <button>what to eat?</button>
      </ul>
    </NavBar>
  );
}

const NavBar = styled.nav`
  ul {
    text-decoration: none;
    text-transform: captilize;
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 320px) {
  }
`;