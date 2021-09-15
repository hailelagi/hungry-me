import React, {useState} from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  imageUrl: string;
  price: number;
}

export default function Card() {
  const [card, setCard] = useState<CardProps | null>(null);
  const food: CardProps = {
    title: "fs",
    imageUrl: "sffs",
    price: 5
  }

  function handleFood(){
    setCard(food);
  }

  return (
    <CardWrapper >
     <p>{card?.title}</p>
      <button onClick={handleFood}>fetch it</button>
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
