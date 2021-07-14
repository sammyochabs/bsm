import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/archive.module.css";

const ImageComp = ({
  image,
  showProduct,
  setShowProduct,
  product,
  setProduct,
}) => {
  const [animate, setAnimate] = useState(false);

  function handleProduct(product) {
    setShowProduct(true);
    setProduct(product);
  }

  return (
    <>
      <Image
        onMouseOver={() => setAnimate(true)}
        onMouseOut={() => setAnimate(false)}
        onClick={() => handleProduct(image)}
        width="400"
        height="400"
        className={animate ? styles.archiveImageXX : styles.archiveImage}
        src={`/${image.imageUrl}`}
        alt=""
      />
    </>
  );
};

export default ImageComp;
