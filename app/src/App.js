/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import header from "./header.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function BasicExample() {
  return (
    <Router>
      <>
        <img style={{ width: "100%" }} src={header} alt="logo" />
        <div>
          <Container>
            <Row>
              <Col>
                <Link to="/projects" component={Button}>
                  Projects
                </Link>
              </Col>
              <Col>
                <Link to="/patner" component={Button}>
                  Patner Invoice
                </Link>
              </Col>
              <Col>
                <Link to="/profile" component={Button}>
                  Profile
                </Link>
              </Col>
            </Row>
          </Container>
          <hr />

          <Switch>
            <Route exact path="/">
              <h1> Legacy</h1>
            </Route>
            <Route exact path="/projects">
              <APP_A />
            </Route>
            <Route path="/patner">
              <APP_B />
            </Route>
            <Route path="/profile">
              <APP_C />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

function APP_A() {
  return (
    <iframe
      width="100%"
      height="450px"
      src="http://localhost:3001"
      frameborder="no"
    ></iframe>
  );
}

function APP_B() {
  return (
    <iframe
      width="100%"
      height="450px"
      src="http://localhost:3002"
      frameborder="no"
    ></iframe>
  );
}

function APP_C() {
  return (
    <iframe
      width="100%"
      height="450px"
      src="http://localhost:3003"
      frameborder="no"
    ></iframe>
  );
}
