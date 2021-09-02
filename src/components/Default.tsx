import React from 'react';
import styled from 'styled-components';

export default function Default() {
    return (
        <DefaultWrapper>
         Custom 404 not found
        </DefaultWrapper>
    );
}

const DefaultWrapper = styled.div`
  text-align: center;
  font-size: large;
  font-weight: bold;
  padding: 5em;
`;