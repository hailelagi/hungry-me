import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Nav(){
  return (
      <NavBar>
          <Link to="/"><h1>Hungry.me</h1></Link>
          <ul>
              <Link to="/"><li>home</li></Link>
              <Link to="/explore"><li>explore</li></Link>
              {/*TODO: dynamic protected route - recommend */}
              <Link to="/signup"><button>what to eat?</button></Link>
          </ul>
      </NavBar>
  );
}

const NavBar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  
  ul {
    display: flex;
    flex-flow: row;
    align-items: center;
    text-decoration: none;
    list-style: none;
    text-transform: capitalize;
    font-size: large;
    padding: 0.5em;
    margin: 0.5em;
  }
  
  ul li {
    margin: 0.5em;
  }
  
  a {
    text-decoration: none;
    color: var(--primary);
  }
  
  button {
    padding: 0.8em;
    font-size: medium;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    background-color: var(--primary);
    color: white;
  }
  
  button:hover {
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 320px) {
  }
`;