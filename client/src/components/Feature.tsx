import React from 'react';
import styled from 'styled-components';

export default function Feature() {
    return (
        <FeatureWrapper >
            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcot enim ad minim veniam, quis nostrud
                exercitation ullamcot</p>
        </FeatureWrapper>
    );
}

const FeatureWrapper = styled.section`
  text-align: center;
  padding: 3em;
  font-size: larger;
  
`;