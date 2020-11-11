import React from "react";
import bootstrap from "../assets/images/expImages/Bootstrap.png";
import css from "../assets/images/expImages/css.png";
import html from "../assets/images/expImages/html.png";
import js from "../assets/images/expImages/JS.png";
import mongoDb from "../assets/images/expImages/mongoDb.png";
import node from "../assets/images/expImages/node.png";
import python from "../assets/images/expImages/python.png";
import react from "../assets/images/expImages/React.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Exp = () => {
  return (
    <Row className=" expImg ">
      <Col>
        <img className=" expIcon " src={html} alt="html.logo" />
        <img className=" expIcon " src={css} alt="css.logo" />
        <img className=" expIcon " src={js} alt="js.logo" />
        <img className=" expIcon " src={bootstrap} alt="bootstrap.logo" />
        <img className=" expIcon " src={mongoDb} alt="mongoDb.logo" />
        <img className=" expIcon " src={node} alt="node.logo" />
        <img className=" expIcon " src={react} alt="React.logo" />
        <img className=" expIcon " src={python} alt="python.logo" />
      </Col>
    </Row>
  );
};

export default Exp;
