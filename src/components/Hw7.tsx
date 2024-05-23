import Toast from "react-bootstrap/Toast";
import React from "react";

export default function Hw7() {
  return (
    <div>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">canh bao'</strong>
        </Toast.Header>
        <Toast.Body>Loi ket noi may chu.</Toast.Body>
      </Toast>
    </div>
  );
}
