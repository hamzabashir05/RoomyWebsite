import React, { useRef, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import { Container } from "react-bootstrap";
import Banner from "./Banner";
import { Dropdown } from "react-bootstrap";
import DatePicker from 'react-datepicker';
export default function MainCard() {

  const [startDate, setStartDate] = useState(new Date());
 const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }}

  return (
    <Container>
      <Dropdown className="ms-auto text-end " drop="start">
        <Dropdown.Toggle className=" dropdown">
          <h6 className="text-dark"> Location </h6>
          <p className="text-dark"> Where are you going ?</p>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdownlist">
          <Dropdown.Item href="#/action-1">Batakundi</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Chitral</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Kalam</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Hunza</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Nathia Gali</Dropdown.Item>
          <Dropdown.Item href="#/action-3">MURREE</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Thandiyani</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Islamabad</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="ms-auto text-end" drop="start">
        <Dropdown.Toggle className="dropdown">
          <h6 className="text-dark"> Check-In/Check-out </h6>{" "}
          <p className="text-dark">Add Dates</p>
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <div className="react-datepicker">
        <label>Select Check-In Date:</label>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      </div>
        </Dropdown.Menu> 
      </Dropdown>

      <Dropdown className="ms-auto text-end" drop="start">
        <Dropdown.Toggle className="dropdown">
          <h6 className="text-dark"> No Of Rooms</h6>{" "}
          <p className="text-dark">Add Rooms</p>
        </Dropdown.Toggle>
        <Dropdown.Menu className="plusMinus">
      <p> Rooms</p>
      <button onClick={handleDecrement} className="plusMinusBtn">-</button>
      <span >{count}</span>
      <button onClick={handleIncrement} className="plusMinusBtn">+</button>
    
        </Dropdown.Menu>
      </Dropdown>

      <Card className="cardTextStylast">
        <Card.Body>
          <Card.Text className="cardLastitem ">
            Check Availability&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-magnifying-glass"></i>
          </Card.Text>
        </Card.Body>
      </Card>
      <>
        <Banner />
      </>
    </Container>
  );
}
