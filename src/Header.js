import React, { useState } from "react";
import "./App.css";
import "./Header.css";
import { FaTelegramPlane } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { Form, Button, Container, Col, Row, Spinner } from "react-bootstrap";
import img from "./img.png";

const Header = () => {
//   const [darkMode, setdarkMode] = useState(true);
//  const [timer, setTimer] = useState(59)

  return (
    <div className="container-fluid mx-3 my-3">
      <Container >
        <Row className="header-div">
          <Col lg="4" className="my-4 " >
          
            <div><img src={img} className="logo"/></div>
            <div>
              <h3 className="tagline">Powered By<span ><a className="text" target="_blank" href="https://www.finstreet.in/">Finstreet</a></span> </h3>
            </div>
          </Col>
          <Col lg="4" className="my-5 ">
            <Row className="d-flex justify-content-center" id="row">
              <Col xs lg="3">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    INR
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="https://hodlinfo.com/BTC-INR"
                      target="_blank"
                    >
                      INR
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs lg="3">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    BTC
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="https://hodlinfo.com/BTC-INR"
                      target="_blank"
                    >
                      BTC
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/ETH-INR"
                      target="_blank"
                    >
                      ETH
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/USDT-INR"
                      target="_blank"
                    >
                      USDT
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/XRP-INR"
                      target="_blank"
                    >
                      XRP
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/TRX-INR"
                      target="_blank"
                    >
                      TRX
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/DASH-INR"
                      target="_blank"
                    >
                      DASH
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/ZEC-INR"
                      target="_blank"
                    >
                      ZEC
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/XEM-INR"
                      target="_blank"
                    >
                      XEM
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/IOST-INR"
                      target="_blank"
                    >
                      IOST
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/WIN-INR"
                      target="_blank"
                    >
                      WIN
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/BTT-INR"
                      target="_blank"
                    >
                      BTT
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/WRX-INR"
                      target="_blank"
                    >
                      WRX
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs lg="6">
                <Button
                  variant="light"
                  href="https://wazirx.com/invite/sp6pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn"
                  target="_blank"
                >
                  BUY BTC
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg="4" className="my-5">
            <Col lg="2"> </Col>
            <Col lg="6" className="tele-div">
              <Button
                variant="info"
                href="https://hodlinfo.com/connect/telegram"
                target="_blank"
                className="text-white justify-content-end"
                id="button"
              >
                <FaTelegramPlane />
               <span style={{marginLeft:"5px",fontWeight:"600"}} >Connect Telegram</span> 
              </Button>
            </Col>
           </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
