import React from "react";
import styles from "./styles";
import { Container } from "react-bootstrap";
import img1 from "./img1.png";

const Image = () => {
  return (
    <div className="container-fluid mx-3 my-3" style={styles.container}>
      <Container fluid>
        <a href="https://finstreet.in/courses" target="_khush">
          <div>
            <img src={img1} className="img1 img-fluid" />
          </div>
        </a>
      </Container>
    </div>
  );
};

export default Image;
