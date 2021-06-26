import React from "react";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function MobileNavListItem({ name, changeTab, currentTab }) {
  return (
    <li onClick={() => changeTab(name)}>
      <span className={currentTab === name ? styles.currentName : styles.name}>
        {name}
      </span>
    </li>
  );
}
