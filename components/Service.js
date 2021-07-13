import React from "react";
import styles from "../styles/service.module.css";
import { VscArrowRight } from "react-icons/vsc";

export default function Service({ head, content }) {
  return (
    <div className={styles.container}>
      <div className="mt-2">
        <VscArrowRight size="30" />
      </div>
      <div className="d-flex flex-column align-items-start">
        <h2 className={styles.heading}>{head}</h2>
        <p className={styles.contents}>{content}</p>
      </div>
    </div>
  );
}
