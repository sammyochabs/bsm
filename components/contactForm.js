import React from "react";
import { Col } from "react-bootstrap";
import styles from "../styles/form.module.css";

export default function ContactForm() {
  return (
    <Col>
      <form className={`${styles.formContainer} d-flex flex-column`}>
        <input type="email" placeholder="EMAIL" />
        <input type="text" placeholder="PHONE NUMBER" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="8"
          placeholder="YOUR MESSAGE"
        ></textarea>
        <button>ENTER</button>
      </form>
    </Col>
  );
}
