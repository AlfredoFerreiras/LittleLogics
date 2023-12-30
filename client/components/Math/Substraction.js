import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";

const minus = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [problem, setProblem] = useState(generateSubtractionProblem());
  const [feedback, setFeedback] = useState("");

  function generateSubtractionProblem() {
    const num1 = Math.ceil(Math.random() * 20);
    const num2 = Math.ceil(Math.random() * 10);
    return {
      num1: Math.max(num1, num2),
      num2: Math.min(num1, num2),
      answer: num1 - num2,
    };
  }

  function handleSubmit() {
    if (parseInt(userAnswer, 10) === problem.answer) {
      setFeedback("Correct!");
      setProblem(generateSubtractionProblem());
    } else {
      setFeedback("Oops, try again!");
    }
    setUserAnswer("");
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2>Subtraction Practice</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formHorizontalSubtraction">
              <Form.Label column sm={6}>
                {`${problem.num1} - ${problem.num2} =`}
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            {feedback && (
              <Alert variant={feedback === "Correct!" ? "success" : "danger"}>
                {feedback}
              </Alert>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default minus;
