import React from "react";
import { Container } from "react-bootstrap";
import img1 from "./img1.png";
import "./common.css";

const Image = () => {
  return (
    <div className="container-fluid mx-3 my-3"   >
      <Container fluid>
        <a href="https://finstreet.in/courses" target="_blank">
          <div id="image-div">
            <img src={img1} className="img1 img-fluid" id="img1-div"  />
          </div>
        </a>
      </Container>
    </div>
  );
};

export default Image;
