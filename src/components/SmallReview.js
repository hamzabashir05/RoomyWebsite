import React from "react";
import r1 from "../assets/review1.jpg";
import r2 from "../assets/review2.jpg";
import r3 from "../assets/review3.jpg";
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from "react-bootstrap";

export default function SmallReview() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  return (
    <Carousel  responsive={responsive}  indicators={true} showArrows={true}> 
      <Carousel.Item >
        <Row>
          <Col  xs={3}>
            <img src={r1} className="w-100 " alt="" />
          </Col>
          <Col  xs={9}>
            <h6 className="reviewName">Umair Jaswal</h6>
            <text className="reviewstyle">
              Overall satisfied with the service and comfort. Rooms were basic
              but clean and everything was in working order.
            </text>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col  xs={3}>
            <img src={r2} className="w-100 " alt="" />
          </Col>
          <Col  xs={9}>
            <h6 className="reviewName"> Humnah Raza</h6>
            <text className="reviewstyle">
              Overall satisfied with the service and comfort. Rooms were basic
              but clean and everything was in working order.
            </text>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col  xs={3}>
            <img src={r3} className="w-100 " alt="" />
          </Col>
          <Col  xs={9}>
            <h6 className="reviewName">Eva Zu Bek</h6>
            <text className="reviewstyle">
              Overall satisfied with the service and comfort. Rooms were basic
              but clean and everything was in working order.
            </text>
          </Col>
        </Row>
      </Carousel.Item> 
    </Carousel>
  );
}
