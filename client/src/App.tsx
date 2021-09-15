import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Explore from "./components/Explore";
import Home from "./components/Home"
import Recommend from "./components/Recommend";
import Default from "./components/Default";
import Nav from "./components/Nav";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

export default function App() {
  return (
      <Router>
          <Nav />
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/explore">
                  <Explore />
              </Route>
              <Route path="/recommend">
                  <Recommend />
              </Route>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/signup">
                  <SignUp />
              </Route>
              <Route path="*" >
                  <Default />
              </Route>
          </Switch>
      </Router>
  );
};