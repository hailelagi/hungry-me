import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import formBackground from "../images/welcome.svg"

export default function Login() {
    return (
        <LoginWrapper>
            <form action="#" method="post">
                <h3> Welcome back! </h3>

                <input type="email" placeholder="person@example.com" />
                <input type="password" placeholder="Enter a password"/>
                <button type="submit">Log in</button>

                <p>Not onboard yet? <Link to="/signup">Let's get started</Link></p>
            </form>
        </LoginWrapper>
    );
}

const LoginWrapper = styled.div` 
  & {
    background: no-repeat center url(${formBackground});
    background-size: auto auto;
    display: flex;
    flex: 1 1 auto;
    padding: 2em;
    align-items: center;
    justify-content: center;
  }
  
  img {
    width: 300px;
  }
  
  h3 {
    padding: 0.5em;
    margin: 0.5em;
    color: var(--background);
  }
  
  form {
    background-color: var(--primary);
     display: flex;
     flex-flow: column nowrap;
     padding: 3em;
     border-radius: 15px;
     width: 300px;
  }
  
  input {
    border: none;
    border-radius: 10px;

    padding: 1em;
    margin: 0.1em;
  }
  
  button {
    padding: 1em;
    margin-top: 1em;
    border: none;
    border-radius: 10px;
  }
  
  p {
    text-align: center;
    padding: 0.5em;
    margin-top: 2em;
  }
  
  a {
    text-decoration: none;
    color: var(--background);
  }
`;