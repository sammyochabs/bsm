import { Row, Col, Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import NavListItem from "../components/NavListItem";
import Services from "../components/Services";
import Archive from "../components/archive";
import ContactForm from "../components/contactForm";
import { BsList } from "react-icons/bs";
import { Fragment } from "react";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("Home");

  const changeTab = (newTab) => {
    setCurrentTab(newTab);
  };

  return (
    <Fragment>
      <Container fluid className="pt-3 d-none d-md-block">
        <Row className={`d-md-none ${styles.mobileNavbar}`}>
          <Col className={styles.mobileNavbarColumn}>
            <div>
              <img className={styles.mobileLogo} src="bsmLogo.png" />
            </div>
            <div>
              <BsList size="30" color="#ff1493" />
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
          <Col
            md={3}
            className={`${styles.navColumn}  d-flex flex-column justify-content-center  `}
          >
            <div onClick={() => changeTab("Home")}>
              <a href="/">
                <img
                  className={styles.logo}
                  src={
                    currentTab === "Home" ? "bsmLogo.png" : "inactiveLogo.png"
                  }
                  alt=""
                />
              </a>
            </div>
            <ul className={styles.navList}>
              <NavListItem
                currentTab={currentTab}
                changeTab={changeTab}
                name={"Services"}
              />
              <NavListItem
                currentTab={currentTab}
                changeTab={changeTab}
                name={"Archive"}
              />
              <NavListItem
                currentTab={currentTab}
                changeTab={changeTab}
                name={"Contact"}
              />
              <NavListItem
                currentTab={currentTab}
                changeTab={changeTab}
                name={"MoodBoard"}
              />
            </ul>
          </Col>
          {currentTab === "Home" ? (
            <Col
              className={`${styles.newletterInputContainer} d-flex flex-column`}
              md={9}
            >
              <div className={styles.videoContainer}>
                <video className={styles.video} muted autoPlay>
                  <source src="bgVideo.mp4" type="video/webm" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>
            </Col>
          ) : currentTab === "Services" ? (
            <Services />
          ) : currentTab === "Archive" ? (
            <Archive />
          ) : (
            <ContactForm />
          )}
        </Row>
        <Row className={styles.footer}>
          <Col className={styles.copyright} md={{ span: "4", offset: "6" }}>
            &copy; BSM 2020
          </Col>
          <Col className={styles.infoEmail} md={{ span: "2" }}>
            <div className="ml-5">
              <span>@bs____m</span>
              <br />
              info@bs-m.la
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="pt-1 pb-3 d-md-none">
        <Row className={`d-md-none ${styles.mobileNavbar}`}>
          <Col className={styles.mobileNavbarColumn}>
            <div>
              <img className={styles.mobileLogo} src="bsmLogo.png" />
            </div>
            <div>
              <BsList size="30" color="#ff1493" />
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
              md={9}
            >
              <div className={styles.videoContainer}>
                <video className={styles.video} muted autoPlay>
                  <source src="bgVideo.mp4" type="video/webm" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>
            </Col>
          ) : currentTab === "Services" ? (
            <Services />
          ) : currentTab === "Archive" ? (
            <Archive />
          ) : (
            <ContactForm />
          )}
        </Row>
        <Row className={styles.footer}>
          <Col className={styles.copyright} md={{ span: "4", offset: "6" }}>
            &copy; BSM 2020
          </Col>
          <Col className={styles.infoEmail} md={{ span: "2" }}>
            <div className="ml-5">
              <span>@bs____m</span>
              <br />
              info@bs-m.la
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
