import React from "react";
import { Col, Row } from "react-bootstrap";
import { archiveImages } from "../utils";
import styles from "../styles/archive.module.css";

export default function Archive() {
  return (
    <Col className="mt-5 mr-4 mb-3">
      <Row>
        {archiveImages.map((image) => {
          return (
            <Col md={4} className={styles.imageColumn}>
              <img
                className={styles.archiveImage}
                src={image.imageUrl}
                alt=""
              />
            </Col>
          );
        })}
      </Row>
    </Col>
  );
}
