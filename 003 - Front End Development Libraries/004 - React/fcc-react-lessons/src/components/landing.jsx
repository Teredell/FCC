import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, withRouter } from "react-router-dom";

function Landing(props) {
  return (
    <div className="navigation">
      <h1><Link to="/">Landing</Link></h1>
      <Container>
        <Row>
          <Col><Link to="/Lesson-001">Lesson 001</Link></Col>
          <Col><Link to="/Lesson-002">Lesson 002</Link></Col>    
          <Col><Link to="/Lesson-003">Lesson 003</Link></Col>
          <Col><Link to="/Lesson-004">Lesson 004</Link></Col>
        </Row>
        <Row>
          <Col><Link to="/Lesson-005">Lesson 005</Link></Col>    
          <Col><Link to="/Lesson-006">Lesson 006</Link></Col>
          <Col><Link to="/Lesson-007">Lesson 007</Link></Col>
          <Col><Link to="/Lesson-008">Lesson 008</Link></Col>    
        </Row>
        <Row>
          <Col><Link to="/Lesson-009">Lesson 009</Link></Col>
          <Col><Link to="/Lesson-010">Lesson 010</Link></Col>
          <Col><Link to="/Lesson-011">Lesson 011</Link></Col>    
          <Col><Link to="/Lesson-012">Lesson 012</Link></Col>
        </Row>
        <Row>
          <Col><Link to="/Lesson-013">Lesson 013</Link></Col>
          <Col><Link to="/Lesson-014">Lesson 014</Link></Col>    
          <Col><Link to="/Lesson-015">Lesson 015</Link></Col>
          <Col><Link to="/Lesson-016">Lesson 016</Link></Col>
        </Row>
        <Row>
          <Col><Link to="/Lesson-017">Lesson 017</Link></Col>
          <Col><Link to="/Lesson-017">Lesson 017</Link></Col>
          <Col><Link to="/Lesson-018">Lesson 018</Link></Col>
          <Col><Link to="/Lesson-019">Lesson 019</Link></Col>
        </Row>
        <Row>

        </Row>
        </Container>
    </div>
  );
}

export default withRouter(Landing);
