import React from "react";
import { Col, Row } from "react-bootstrap";
import { archiveImages } from "../utils";
import styles from "../styles/archive.module.css";
import Image from "next/image";

export default function Archive() {
  return (
    <Col className="mt-5 mr-4 mb-3">
      <Row>
        {archiveImages.map((image, key) => {
          return (
            <Col key={key} md={4} className={styles.imageColumn}>
              <Image
                // layout="fill"
                width="400"
                height="400"
                className={styles.archiveImage}
                src={`/${image.imageUrl}`}
                alt=""
              />
            </Col>
          );
        })}
      </Row>
    </Col>
  );
}
