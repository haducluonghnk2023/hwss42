import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";

export default function Hw2() {
  return (
    <div>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          input co lon
        </InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          input co trung binh
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">input co be</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
  );
}
