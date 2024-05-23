import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

export default function Hw3() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/5/30/ezgifcom-webp-to-jpg-32-16854621307181682381719.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/5/30/ezgifcom-webp-to-jpg-32-16854621307181682381719.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
