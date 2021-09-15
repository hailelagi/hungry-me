import React from "react";
import styled from 'styled-components';
import Card from "./Card";

export default function Picks() {
    return (
        <PicksWrapper>
            <Card />
            <Card />
            <Card />
        </PicksWrapper>
    );
}

const PicksWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  
  h2 {
    text-align: center;
  }
`;