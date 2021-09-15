import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterWrapper >
            Footer placeholder 2021
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 1em;
  background-color: var(--secondary);
  color: var(--background);
`;