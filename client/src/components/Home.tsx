import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils,  faSeedling, } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import Picks from "./Picks"
import Join from "./Join";
import Footer from "./Footer";
import Feature from "./Feature";

export default function Home() {
  return (
    <>
      <Banner>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcot enim ad minim veniam, quis nostrud
          exercitation ullamcot
          <div>
              <div className="icons">
                  <FontAwesomeIcon icon={faUtensils} size="3x" />
                  <span>Craft recipies</span>
              </div>
              <div className="icons">
                  <FontAwesomeIcon icon={faUtensils} size="3x" />
                  <span>Discover dishes</span>
              </div>
              <div className="icons">
                  <FontAwesomeIcon icon={faUtensils} size="3x" />
                  <span>Find restaurants!</span>
              </div>

          </div>
      </p>
      </Banner>
        <h2>Today's Picks</h2>
        <Picks />
        <h2>Lorem ipsum dolor sit amet</h2>
        <Feature />
        <Feature />
        <Feature />
        <Join />
        <Footer />
    </>
  );
}

const Banner = styled.header`
    & {
      padding: 1em;
      font-size: 170%;
      text-align: center;
      width: 70%;
      margin: auto;
    }
  
  div {
    display: flex;
    flex-flow: nowrap;
    justify-content: center;
    padding: 1em;
    
    div {
      display: flex;
      align-items: center;
      border: solid black 1px;
      border-radius: 10px;
      margin: 0.1em;
      padding: 0.8em;
    }
    
    svg {
      color: var(--primary);
    }
    
    .icons {
      display: flex;
      flex-flow: column;

      span {
        font-size: 70%;
      }
    }
  }
  
  @media only screen and (max-width: 433px) {
    & {
      padding: 0;
      font-size: 140%;
      width: 80%;
      margin: auto;
    }
  }
  
`;