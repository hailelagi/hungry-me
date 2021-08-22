import React from 'react';
import styled from 'styled-components';
import Nav from "./Nav";
import Picks from "./Picks"
import Join from "./Join";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Banner>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcot enim ad minim veniam, quis nostrud
          exercitation ullamcot</p>
      </Banner>
        <h2>Today's Picks</h2>
        <Picks />
        <Join />
        <Footer />
    </>
  );
}

const Banner = styled.header`
  padding: 1.5em;
  font-size: x-large;
  text-align: center;
  width: 70%;
  margin: auto;
`;