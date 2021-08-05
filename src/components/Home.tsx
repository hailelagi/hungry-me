import React from 'react';
import styled from 'styled-components';
import Nav from "./Nav";
import Card from "./Card"

export default function Home() {
  return (
    <HomeWrapper >
      <Nav />
      <header className="App-header">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcot</p>
        <button>What's your taste?</button>
      </header>

      <h1>Today's Picks</h1>
      <Card />
    </ HomeWrapper>
  );
}

const HomeWrapper = styled.div`

`;