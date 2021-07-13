import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";

const Header = () => {
  return (
    <Row className="">
      <Col md={{ span: "3", offset: "9" }}>
        <label className={styles.newsletterLabel}>
          Subscribe To Our Newsletter:
        </label>
        <input
          placeholder="Email Here"
          className={styles.newsletterInput}
          type="email"
        />
      </Col>
    </Row>
  );
};

export default Header;
