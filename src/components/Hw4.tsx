import Dropdown from "react-bootstrap/Dropdown";

export default function Hw4() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          hdl
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Cai dat</Dropdown.Item>
          <Dropdown.Item href="#/action-2">doi mat khau</Dropdown.Item>
          <Dropdown.Item href="#/action-3">dang xuat</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
