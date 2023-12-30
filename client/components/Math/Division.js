import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";

const Division = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [problem, setProblem] = useState(generateDivisionProblem());
  const [feedback, setFeedback] = useState("");

  function generateDivisionProblem() {
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    const answer = num1 * num2;
    return { num1: answer, num2, answer: num1 };
  }

  function handleSubmit() {
    if (parseInt(userAnswer, 10) === problem.answer) {
      setFeedback("Correct!");
      setProblem(generateDivisionProblem());
    } else {
      setFeedback("Oops, try again!");
    }
    setUserAnswer("");
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2>Division Practice</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formHorizontalDivision">
              <Form.Label column sm={6}>
                {`${problem.num1} ÷ ${problem.num2} =`}
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

export default Division;
