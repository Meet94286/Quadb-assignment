import React from "react";
import styles from "./styles";
import { Container } from "react-bootstrap";
import img2 from "./img2.png";

const Image1 = () => {
  return (
    <div className="container-fluid mx-3 my-3" style={styles.container}>
      <Container fluid>
        <a href="https://ftx.com/" target="_khush">
          <div>
            <img src={img2} className="img2 img-fluid" />
          </div>
        </a>
      </Container>
    </div>
  );
};

export default Image1;
