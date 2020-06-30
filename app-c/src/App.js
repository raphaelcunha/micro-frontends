import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@examplesraphaelscunha/button";

function App() {
  return (
    <div className="App">
      <Container fluid="md">
        <Row>
          <Col>
            <h1>APP C</h1>
            <Button> Botoão com versão v0.0.4</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
