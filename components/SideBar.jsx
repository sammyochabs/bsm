import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import NavListItem from "./NavListItem";

const SideBar = ({ currentTab, changeTab }) => {
  return (
    <>
      <Col
        md={3}
        className={`${styles.navColumn} d-none   d-md-flex flex-column justify-content-center  `}
      >
        <div onClick={() => changeTab("Home")}>
          <Link href="/">
            <Image
              // layout="fill"
              width="200"
              height="20"
              className={styles.logo}
              src={currentTab === "Home" ? "/bsmLogo.png" : "/InactiveLogo.png"}
              alt=""
            />
          </Link>
        </div>
        <ul className={styles.navList}>
          <NavListItem
            currentTab={currentTab}
            changeTab={changeTab}
            name={"Services"}
            page={"services"}
          />
          <NavListItem
            currentTab={currentTab}
            changeTab={changeTab}
            name={"Archive"}
            page={"portfolio"}
          />
          <NavListItem
            currentTab={currentTab}
            changeTab={changeTab}
            name={"Contact"}
            page={"contact"}
          />
          <NavListItem
            currentTab={currentTab}
            changeTab={changeTab}
            name={"MoodBoard"}
            page={"moodboard"}
          />
        </ul>
      </Col>
    </>
  );
};

export default SideBar;
