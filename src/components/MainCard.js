import React, { useRef, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import { Container } from "react-bootstrap";
import Banner from "./Banner";
import { Dropdown } from "react-bootstrap";
// import Picker from "react-datepicker"; // Import your actual Picker library here
// import MonthBox from "react-datepicker"; // Import your MonthBox component here

export default function MainCard() {
  // const handleClickMonthBox = () => {
  //   // Handle the click event for the first MonthBox here
  // };

  // const handleClickMonthBox2 = () => {
  //   // Handle the click event for the second MonthBox here
  // };

  // const handleClickMultiBox = () => {
  //   // Handle the click event for the MultiBox here
  // };

  // const _handleClickRangeBox = () => {
  //   // Handle the click event for the first RangeBox here
  // };

  // const _handleClickRangeBox2 = () => {
  //   // Handle the click event for the second RangeBox here
  // };

  // const pickerLang = {
  //   months: [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ],
  //   from: "From",
  //   to: "To",
  // };

  // const [singleValue, setSingleValue] = useState({ year: 2014, month: 11 });
  // const [singleValue2, setSingleValue2] = useState({ year: 2016, month: 7 });
  // const [multiValue, setMultiValue] = useState([
  //   { year: 2016, month: 7 },
  //   { year: 2016, month: 11 },
  //   { year: 2017, month: 3 },
  //   { year: 2019, month: 5 },
  // ]);
  // const [rangeValue, setRangeValue] = useState({
  //   from: { year: 2014, month: 8 },
  //   to: { year: 2015, month: 5 },
  // });
  // const [rangeValue2, setRangeValue2] = useState({
  //   from: { year: 2013, month: 11 },
  //   to: { year: 2016, month: 3 },
  // });

  // const pickAMonth = useRef(null);
  // const pickAMonth2 = useRef(null);
  // const pickMulti = useRef(null);
  // const pickRange = useRef(null);
  // const pickRange2 = useRef(null);

  // const makeText = (m) => {
  //   if (m && m.year && m.month) {
  //     return pickerLang.months[m.month - 1] + ". " + m.year;
  //   }
  //   return "?";
  // };

  // const handleAMonthChange = (value) => {
  //   setSingleValue(value);
  // };

  // const handleAMonthDissmis = () => {
  //   // Handle dismissal if needed
  // };

  // const handleAMonthChange2 = (value) => {
  //   setSingleValue2(value);
  // };

  // const handleAMonthDissmis2 = () => {
  //   // Handle dismissal if needed
  // };

  // const handleMultiChange = (value) => {
  //   setMultiValue(value);
  // };

  // const handleMultiDissmis = () => {
  //   // Handle dismissal if needed
  // };

  // const handleRangeChange = (value) => {
  //   setRangeValue(value);
  // };

  // const handleRangeDissmis = () => {
  //   // Handle dismissal if needed
  // };

  // const handleRangeChange2 = (value) => {
  //   setRangeValue2(value);
  // };

  // const handleRangeDissmis2 = () => {
  //   // Handle dismissal if needed
  // };

  // useEffect(() => {
  //   const btnNumbers = document.querySelectorAll('.btn-number');

  //   btnNumbers.forEach(function (btn) {
  //     btn.addEventListener('click', function (e) {
  //       e.preventDefault();

  //       const fieldName = this.getAttribute('data-field');
  //       const type = this.getAttribute('data-type');
  //       const input = document.querySelector("input[name='" + fieldName + "']");
  //       const currentVal = parseInt(input.value);

  //       if (!isNaN(currentVal)) {
  //         if (type === 'minus') {
  //           if (currentVal > parseInt(input.getAttribute('min'))) {
  //             input.value = currentVal - 1;
  //             input.dispatchEvent(new Event('change'));
  //           }

  //           if (parseInt(input.value) === parseInt(input.getAttribute('min'))) {
  //             this.setAttribute('disabled', true);
  //           }
  //         } else if (type === 'plus') {
  //           if (currentVal < parseInt(input.getAttribute('max'))) {
  //             input.value = currentVal + 1;
  //             input.dispatchEvent(new Event('change'));
  //           }

  //           if (parseInt(input.value) === parseInt(input.getAttribute('max'))) {
  //             this.setAttribute('disabled', true);
  //           }
  //         }
  //       } else {
  //         input.value = 0;
  //       }
  //     });
  //   });
  // }, [])

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
          {/* <ul>
            <li>
              <label>
                <b>Pick A Month</b>
                <span>(Available years: 2008, 2011, 2012, 2014, 2016)</span>
              </label>
              <div className="edit">
                <Picker
                  ref={pickAMonth}
                  years={[2008, 2011, 2012, 2014, 2016, 2018, 2020]}
                  value={singleValue}
                  lang={pickerLang.months}
                  onChange={handleAMonthChange}
                  onDismiss={handleAMonthDissmis}
                >
                  <MonthBox
                    value={makeText(singleValue)}
                    onClick={handleClickMonthBox}
                  />
                </Picker>
              </div>
            </li>
            <li>
              <label>
                <b>Pick A Month</b>
                <span>(Available months from Feb.2016 to Sep.2016)</span>
              </label>
              <div className="edit">
                <Picker
                  ref={pickAMonth2}
                  years={{
                    min: { year: 2016, month: 2 },
                    max: { year: 2016, month: 9 },
                  }}
                  value={singleValue2}
                  lang={pickerLang.months}
                  theme="dark"
                  onChange={handleAMonthChange2}
                  onDismiss={handleAMonthDissmis2}
                >
                  <MonthBox
                    value={makeText(singleValue2)}
                    onClick={handleClickMonthBox2}
                  />
                </Picker>
              </div>
            </li>
            <li>
              <label>
                <b>Pick Several Month</b>
                <span>(Available months from Feb.2016 to Apr.2020)</span>
              </label>
              <div className="edit">
                <Picker
                  ref={pickMulti}
                  years={{
                    min: { year: 2016, month: 2 },
                    max: { year: 2020, month: 4 },
                  }}
                  value={multiValue}
                  lang={pickerLang.months}
                  theme="dark"
                  onChange={handleMultiChange}
                  onDismiss={handleMultiDissmis}
                >
                  <MonthBox
                    value={multiValue.map((v) => makeText(v)).join(" | ")}
                    onClick={handleClickMultiBox}
                  />
                </Picker>
              </div>
            </li>
            <li>
              <label>
                <b>Pick A Span of Months</b>
                <span>(Available years from 2013 to this year)</span>
              </label>
              <div className="edit">
                <Picker
                  ref={pickRange}
                  years={{ min: 2013 }}
                  value={rangeValue}
                  lang={pickerLang}
                  theme="light"
                  onChange={handleRangeChange}
                  onDismiss={handleRangeDissmis}
                >
                  <MonthBox
                    value={
                      makeText(rangeValue.from) +
                      " ~ " +
                      makeText(rangeValue.to)
                    }
                    onClick={_handleClickRangeBox}
                  />
                </Picker>
              </div>
            </li>
            <li>
              <label>
                <b>Pick A Span of Months</b>
                <span>(Available months from Apr.2013 to Sep.2016)</span>
              </label>
              <div className="edit">
                <Picker
                  ref={pickRange2}
                  years={{
                    min: { year: 2012, month: 4 },
                    max: { year: 2017, month: 9 },
                  }}
                  value={rangeValue2}
                  lang={pickerLang}
                  theme="dark"
                  onChange={handleRangeChange2}
                  onDismiss={handleRangeDissmis2}
                >
                  <MonthBox
                    value={
                      makeText(rangeValue2.from) +
                      " ~ " +
                      makeText(rangeValue2.to)
                    }
                    onClick={_handleClickRangeBox2}
                  />
                </Picker>
              </div>
            </li>
          </ul>*/}
        </Dropdown.Menu> 
      </Dropdown>

      <Dropdown className="ms-auto text-end" drop="start">
        <Dropdown.Toggle className="dropdown">
          <h6 className="text-dark"> No Of Rooms</h6>{" "}
          <p className="text-dark">Add Rooms</p>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          
        {/* <div class="input-group">
          <span class="input-group-btn">
              <button type="button" class="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]">
                <span class="glyphicon glyphicon-minus"></span>
              </button>
          </span>
          <input type="text" name="quant[2]" class="form-control input-number" value="10" min="1" max="100" />
          <span class="input-group-btn">
              <button type="button" class="btn btn-success btn-number" data-type="plus" data-field="quant[2]">
                  <span class="glyphicon glyphicon-plus"></span>
              </button>
          </span>
      </div> */}
        </Dropdown.Menu>
      </Dropdown>

      <Card className="cardTextStylast">
        <Card.Body>
          <Card.Text className="cardLastitem ">
            Check Availability <i class="fa-solid fa-magnifying-glass"></i>
          </Card.Text>
        </Card.Body>
      </Card>
      <>
        <Banner />
      </>
    </Container>
  );
}
