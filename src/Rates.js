import React from "react";
import "./rates.css";
import { Container, Col, Row } from "react-bootstrap";
import { BiRupee } from "react-icons/bi";

const Rates = () => {

 
  return (
    <div style={{display:"flex",justifyContent:"space-around" }}>
      <div className="container-fluid mx-3 my-3" >
        <Container>
          <Row>
            <Col className="my-5">
              <h1 className="h1" id="h1"  >
                0.26%
              </h1>
              <h5 className="text-muted">5 MINS</h5>
            </Col>
            <Col className="my-5">
              <h1 className="h1" id="h1" >
                1.14%
              </h1>
              <h5 className="text-muted">1 HOUR</h5>
            </Col>
            <Col xs={6}>
              <div className="text-center">
                <h5 className="mx-auto">BEST PRICE TO TRADE</h5>
                <h1 className="best">
                  <BiRupee /> 37,67,878
                </h1>
                <h5 className="text-muted ">
                  Average BTC/INR net price including commision
                </h5>
              </div>
            </Col>
            <Col className="my-5">
              {" "}
              <h1 className="h1" id="h1" >
                5.9%
              </h1>
              <h5 className="text-muted">1 DAY</h5>
            </Col>
            <Col className="my-5">
              <h1 className="h1" id="h1" >
                30.36%
              </h1>
              <h5 className="text-muted">7 DAYS</h5>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Rates;
