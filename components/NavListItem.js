import React from "react";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavListItem({ name, changeTab, currentTab, page }) {
  const [showArrow, setshowArrow] = useState(false);

  const router = useRouter();

  const handleMouseOver = () => {
    setshowArrow(true);
  };

  const handleMouseOut = () => {
    setshowArrow(false);
  };

  const handleClick = (link) => {
    router.push(`/${link}`);
  };

  return (
    <li
      onClick={() => handleClick(page)}
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
