import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import ImageComp from "./ImageComp";
import { BsX, BsChevronRight, BsChevronLeft } from "react-icons/bs";

const SingleProduct = ({ image, setShowProduct }) => {
  function handleModal(e) {
    if (e.target.classList[0] === "Home_imageOverlay__I-FQ_") {
      setShowProduct(false);
    }
  }
  return (
    <div onClick={handleModal} className={styles.imageOverlay}>
      <BsX
        onClick={() => setShowProduct(false)}
        className={styles.closeIcon}
        size="80"
        color="#ff1493"
      />
      <BsChevronLeft size="80" color="#ff1493" />
      <div className={styles.imageContainer}>
        <ImageComp image={image} />
      </div>
      <BsChevronRight size="80" color="#ff1493" />
    </div>
  );
};

export default SingleProduct;
