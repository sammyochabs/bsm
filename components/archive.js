import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { archiveImages } from "../utils";
import styles from "../styles/archive.module.css";
import Cookie from "js-cookie";
import ImageComp from "./ImageComp";

export default function Archive({ imagesUrl }) {
  useEffect(() => {
    if (!Cookie.get("imagesUrl")) {
      Cookie.set("imagesUrl", archiveImages);
    }
  }, []);
  return (
    <Col md={8} className="mt-5 mb-3">
      <Row>
        {imagesUrl.map((image, key) => {
          return (
            <Col key={key} md={4} className={styles.imageColumn}>
              <ImageComp image={image} />
            </Col>
          );
        })}
      </Row>
    </Col>
  );
}
