import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";
import certificate from "../../../assets/images/star.png";
import training from "../../../assets/images/training.png";
import internship from "../../../assets/images/arrow.png";
import mentor from "../../../assets/images/mentor.png";
import file from "../../../assets/images/file.png";
import career from "../../../assets/images/career.png";

const CardItem = ({ item }) => {
  console.log({ item });
  return (
    <div className={styles.card} key={item?.id}>
      <Image src={certificate} width={70} height={70} alt={item?.title} />
      <h2 className={styles.card_title}>{item?.title}</h2>
      <p className={styles.card_text}>{item?.text}</p>
    </div>
  );
};

export default CardItem;
