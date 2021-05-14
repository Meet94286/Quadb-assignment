import React from "react";
import styles from "./styles";
// import "./App.css";
// import { Dropdown } from "react-bootstrap";
// import { NavLink, Button, Container, Col, Row } from "react-bootstrap";
import Header from "./Header";
import Rates from "./Rates";
import Image from "./Image";
import Image1 from "./Image1";
import Tables from "./Tables";
import Footer from "./Footer";
import { Button } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Header />
      <Rates />
      <Image />
      <Tables />
      <Image1 />
      <Footer />
      <Footer />
      <div
        className="container-fluid bg-dark text-center homescreen"
        style={styles.homescreen}
      >
        {" "}
        <Button
          variant="outline-info my-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add hodlinfo to home screen
        </Button>{" "}
      </div>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Install app?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Install
              </button>
              <button
                type="button"
                class="btn btn-light"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

{
  /* <div className="container mx-3 my-3">
      <h1>HODLINFO</h1>
      <h3>Powered By Finstreet</h3>
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col xs lg="1">
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
            <Col xs lg="1">
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
            <Col xs lg="2">
              <Button
                variant="light"
                href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn"
                target="_khush"
              >
                BUY BTC
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div> */
}
