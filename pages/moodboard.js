import React, { useState } from "react";
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { BsList } from "react-icons/bs";
import MobileNavListItem from "../components/mobileListItem";

const MoodBoardPage = () => {
  const [currentTab, setCurrentTab] = useState("MoodBoard");
  const [showSidebar, setShowSidebar] = useState(false);

  const changeTab = (newTab) => {
    setCurrentTab(newTab);
    setShowSidebar(false);
  };
  const toggleSidebar = () => {
    setShowSidebar((showSidebar) => !showSidebar);
  };
  return (
    <Fragment>
      {showSidebar && (
        <div onClick={toggleSidebar} className={styles.overlay}></div>
      )}

      {showSidebar && (
        <div className={styles.sideBarContainer}>
          <ul>
            <MobileNavListItem
              currentTab={currentTab}
              changeTab={changeTab}
              setShowSidebar={setShowSidebar}
              name={"Services"}
              page={"services"}
            />
            <MobileNavListItem
              currentTab={currentTab}
              changeTab={changeTab}
              name={"Archive"}
              setShowSidebar={setShowSidebar}
              page={"portfolio"}
            />
            <MobileNavListItem
              currentTab={currentTab}
              changeTab={changeTab}
              name={"Contact"}
              setShowSidebar={setShowSidebar}
              page={"contact"}
            />
            <MobileNavListItem
              currentTab={currentTab}
              changeTab={changeTab}
              name={"MoodBoard"}
              setShowSidebar={setShowSidebar}
              page={"moodboard"}
            />
          </ul>
        </div>
      )}

      <Row className={`d-md-none mb-3 ${styles.mobileNavbar}`}>
        <Col className={styles.mobileNavbarColumn}>
          <div>
            <Image
              width="200"
              height="20"
              className={styles.mobileLogo}
              src="/bsmLogo.png"
              alt=""
            />
          </div>
          <div>
            <BsList onClick={toggleSidebar} size="30" color="#ff1493" />
          </div>
        </Col>
      </Row>
      <Header />
      <Row className="pl-4">
        <SideBar currentTab={currentTab} changeTab={changeTab} />
      </Row>
      <Footer />
    </Fragment>
  );
};

export default MoodBoardPage;
