import React from 'react';
import styled from 'styled-components';
import error from '../images/404-error.svg'

export default function Default() {
    return (
        <DefaultWrapper />
    );
}

const DefaultWrapper = styled.main` 
  & {
    background: no-repeat center url(${error});
    background-size: auto auto;
    display: flex;
    flex: 1 1 auto;
  }
`;