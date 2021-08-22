import React from 'react';
import styled from 'styled-components';

export default function Join() {
    return (
        <JoinWrapper >
            <h3>Want access to a customised experience?</h3>
            <p> Sign up for access to more recipes, find where to buy food online and much more by creating an
            account</p>
            <form>
                <input type="email" placeholder="person@example.com"/> <button>Sign up</button>
            </form>
        </JoinWrapper>
    );
}

const JoinWrapper = styled.div`
  text-align: center;
  background-color: #00AA55;
  padding: 2em;
  font-size: larger;
  
  p {
    margin: 0.5em;
  }
  input, button {
    padding: 0.8em;
    border: none;
    border-radius: 5px;
  }
  button {
    color: white;
    background-color: var(--secondary);
  }
`;