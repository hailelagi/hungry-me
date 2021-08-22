import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  imageUrl: string;
  price: number;
}

export default function Card() {
  return (
    <CardWrapper >
    card
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border: none;
  border-radius: 15px;
  width: 300px;
  height: 250px;
  background-color: grey;
  margin: 1em;
  padding: 0.2em;
`;