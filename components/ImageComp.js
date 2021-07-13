import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/archive.module.css";

const ImageComp = ({ image }) => {
  const [animate, setAnimate] = useState(false);

  return (
    <Image
      onMouseOver={() => setAnimate(true)}
      onMouseOut={() => setAnimate(false)}
      width="400"
      height="400"
      className={animate ? styles.archiveImageXX : styles.archiveImage}
      src={`/${image.imageUrl}`}
      alt=""
    />
  );
};

export default ImageComp;
