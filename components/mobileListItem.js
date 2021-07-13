import React from "react";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function MobileNavListItem({
  name,
  changeTab,
  currentTab,
  page,
}) {
  const router = useRouter();
  const handleClick = (link) => {
    router.push(`/${link}`);
  };
  return (
    <li onClick={() => handleClick(page)}>
      <span className={currentTab === name ? styles.currentName : styles.name}>
        {name}
      </span>
    </li>
  );
}
