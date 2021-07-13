import React from "react";
import styles from "../styles/Home.module.css";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Row className={`d-none d-md-block ${styles.footer}`}>
        <Col className={styles.copyright} md={{ span: "4", offset: "6" }}>
          &copy; BSM 2020
        </Col>
        <Col className={styles.infoEmail} md={{ span: "2" }}>
          <div className={`${styles.instaLinkText} ml-`}>
            <span className={styles.instaLink}>
              <Link href={"https://Instagram.com/bs______m"}>@bs____m</Link>
            </span>
            <br />
            <a href="mailto:info@bs-m.la">info@bs-m.la</a>
          </div>
        </Col>
      </Row>
      <Row className={` d-md-none ${styles.footer}`}>
        <Col className={styles.copyright}>&copy; BSM 2020</Col>
        <Col className={styles.infoEmail}>
          <div className={`${styles.instaLinkText} ml-`}>
            <span className={styles.instaLink}>
              <Link href={"https://Instagram.com/bs______m"}>@bs____m</Link>
            </span>
            <br />
            <a href="mailto:info@bs-m.la">info@bs-m.la</a>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
