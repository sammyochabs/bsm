import { Row, Col, Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import NavListItem from "../components/NavListItem";
import Services from "../components/Services";
import Archive from "../components/archive";
import ContactForm from "../components/contactForm";
import { BsList } from "react-icons/bs";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNavListItem from "../components/mobileListItem";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("Home");
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
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid className="pt-1 d-none d-md-block">
        <Header />
        <Row>
          <video className={styles.video} muted autoPlay>
            <source src="bgVideo.mp4" type="video/webm" />
            Sorry, your browser does not support embedded videos.
          </video>
          <SideBar currentTab={currentTab} changeTab={changeTab} />
          {currentTab === "Home" ? (
            <Col
              className={`${styles.newletterInputContainer} d-flex flex-column`}
              md={9}
            >
              <div className={styles.videoContainer}></div>
            </Col>
          ) : currentTab === "Services" ? (
            <Services />
          ) : currentTab === "Archive" ? (
            <Archive />
          ) : currentTab === "Contact" ? (
            <ContactForm />
          ) : (
            ""
          )}
        </Row>
        <Footer />
      </Container>
      <Container fluid className="pt-1 d-md-none d-flex flex-column">
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
        <Row>
          <Col md={{ span: "4", offset: "8" }}>
            <label className={styles.newsletterLabel}>
              Subscribe To Our Newsletter:
            </label>
            <input
              placeholder="Email Here"
              className={styles.newsletterInput}
              type="email"
            />
          </Col>
        </Row>
        <Row>
          {currentTab === "Home" ? (
            <Col
              className={`${styles.newletterInputContainer} d-flex flex-column`}
              md={12}
            >
              <div className={styles.videoContainer}>
                <video className={styles.video} muted autoPlay>
                  <source src="bgVideo.mp4" type="video/webm" />
                  Sorry, your browser does not support embedded videos.
                </video>
              </div>
            </Col>
          ) : currentTab === "Services" ? (
            <Services />
          ) : currentTab === "Archive" ? (
            <Archive />
          ) : currentTab === "Contact" ? (
            <ContactForm />
          ) : (
            ""
          )}
        </Row>
        <Footer />
      </Container>
    </Fragment>
  );
}
