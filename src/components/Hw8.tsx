import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React from "react";

export default function Hw8() {
  return (
    <div>
      {" "}
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="trang chu" title="trang chu">
          day la trang chu
        </Tab>
        <Tab eventKey="gioi thieu" title="gioi thieu">
          day la trang gioi thieu
        </Tab>
        <Tab eventKey="lien he" title="lien he">
          day la trang lien he
        </Tab>
      </Tabs>
    </div>
  );
}
