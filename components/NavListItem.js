import React from "react";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function NavListItem({ name, changeTab, currentTab }) {
  const [showArrow, setshowArrow] = useState(false);

  const handleMouseOver = () => {
    setshowArrow(true);
  };

  const handleMouseOut = () => {
    setshowArrow(false);
  };

  return (
    <li
      onClick={() => changeTab(name)}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      <span className={currentTab === name ? styles.currentName : styles.name}>
        {name}
      </span>
      {showArrow && (
        <span style={{ color: "#ff1493" }}>
          <i className="fas fa-arrow-left"></i>
        </span>
      )}
    </li>
  );
}
