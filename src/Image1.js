import React from "react";
import styles from "./styles";
import { Container } from "react-bootstrap";
import img2 from "./img2.png";
import "./common.css";

const Image1 = () => {
  return (

    <div className="container-fluid mx-3 my-3"  >
      <Container fluid >
        <a href="https://ftx.com/" target="_blank" >
          <div>
            <img src={img2} className="img2 img-fluid" id="img2" />
          </div>
        </a>
      </Container>
    </div>
  );
};

export default Image1;
