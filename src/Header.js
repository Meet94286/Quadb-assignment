import React, { useState } from "react";
import "./App.css";
import "./Header.css";
import { FaTelegramPlane } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { Form, Button, Container, Col, Row, Spinner } from "react-bootstrap";
import styles from "./styles";

const Header = () => {
  // const [darkMode, setdarkMode] = useState(false);
  // const [timer, setTimer] = useState(59)

  return (
    <div className="container-fluid mx-3 my-3" style={styles.container}>
      <Container fluid xxl className="">
        <Row>
          <Col lg="4" className="my-4 ">
            {" "}
            <h1 className="name" style={styles.name}>
              HODLINFO
            </h1>
            <div>
              <h3>Powered By Finstreet</h3>
            </div>
          </Col>
          <Col lg="4" className="my-5 ">
            <Row className="d-flex justify-content-center">
              <Col xs lg="3">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    INR
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="https://hodlinfo.com/BTC-INR"
                      target="_khush"
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
                      target="_khush"
                    >
                      BTC
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/ETH-INR"
                      target="_khush"
                    >
                      ETH
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/USDT-INR"
                      target="_khush"
                    >
                      USDT
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/XRP-INR"
                      target="_khush"
                    >
                      XRP
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/TRX-INR"
                      target="_khush"
                    >
                      TRX
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/DASH-INR"
                      target="_khush"
                    >
                      DASH
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/ZEC-INR"
                      target="_khush"
                    >
                      ZEC
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/XEM-INR"
                      target="_khush"
                    >
                      XEM
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/IOST-INR"
                      target="_khush"
                    >
                      IOST
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/WIN-INR"
                      target="_khush"
                    >
                      WIN
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/BTT-INR"
                      target="_khush"
                    >
                      BTT
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://hodlinfo.com/WRX-INR"
                      target="_khush"
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
                  target="_khush"
                >
                  BUY BTC
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg="4" className="my-5">
            <Col lg="2"> </Col>
            <Col lg="6">
              <Button
                variant="info"
                href="https://hodlinfo.com/connect/telegram"
                target="_khush"
                className="text-white justify-content-end"
              >
                <FaTelegramPlane />
                Connect Telegram
              </Button>
            </Col>
            <Col lg="2">
              {/* <div className="switch-checkbox">
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={() => setdarkMode(!darkMode)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div> */}
              {/* <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked
                    onChange={() => setdarkMode(!darkMode)}
                  />
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckChecked"
                  ></label>
                </div> */}
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
