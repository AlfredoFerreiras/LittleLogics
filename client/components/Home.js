import React from "react";
import { connect } from "react-redux";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "./Navbar";

export const Home = ({ username }) => {
  return (
    <div id="app">
      <Navbar />
      <Container className="home-content mt-5">
        <Row className="hero-section">
          <Col md={6} className="hero-text">
            <h1 className="fade-in" style={{ textAlign: "center" }}>
              Helping kids learn the fun way
              <br /> Welcome, {username}!
            </h1>
          </Col>
        </Row>

        <Row className="about-academy mb-5">
          <Col className="text-center">
            <h2>About Our Academy</h2>
            <p>
              LittleLogics is more than just an app; it's a platform where
              education meets fun!
            </p>
          </Col>
        </Row>

        <Row className="sample-lessons mb-5">
          <Col className="text-center">
            <h2>Try Our Lessons</h2>
            {/* Insert a component that showcases a sample lesson or game */}
          </Col>
        </Row>

        <Row className="enrollment-process text-center mb-5">
          <Col>
            <h2>Join Us</h2>
            <p>
              Sign up today and start exploring the world of knowledge with your
              child.
            </p>
            <Button variant="primary" className="cta-button">
              Sign Up
            </Button>
          </Col>
        </Row>
      </Container>

      <footer className="home-footer text-center mt-5 p-3">
        <p>Contact us for more information or support</p>
      </footer>
    </div>
  );
};

const mapState = (state) => ({
  username: state.auth.username,
});

export default connect(mapState)(Home);
