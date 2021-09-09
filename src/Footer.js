import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container fluid>
        <hr />
        <Row>
          <Col sm={8} className="text-muted">
            Copyright
            <AiOutlineCopyrightCircle />
            2019 Hodlinfo.com Developed by QuadBTech
          </Col>
          <Col sm={4}>
            <div className=" d-flex justify-content-end text-muted">
              <a>Support</a>
            </div>
          </Col>  
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
