import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";

export default function Hw9() {
  return (
    <div>
      <h1
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        Đăng kí tài khoản
      </h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="text" placeholder="nhap email..." />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Mat khau</Form.Label>
            <Form.Control required type="text" placeholder="nhap mat khau..." />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>ho va ten</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Vi du : Nguyen Van A"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Dia Chi</Form.Label>
            <Form.Control
              type="text"
              placeholder="Vi du: Thanh xuan , Ha noi"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Col>
          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              Thanh pho
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="d-inline mx-2" autoClose="inside">
            <Dropdown.Toggle id="dropdown-autoclose-inside">
              Quan
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>ma buu dien</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <br></br>

        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}
