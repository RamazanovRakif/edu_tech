import React from "react";
import styles from "./course-cards.module.scss";
import Image from "next/image";

const CardItem = ({ item }: any) => {
  return (
    <div className={styles.card} key={item?.id}>
      <div className={styles.card_img}>
        <Image src={item.img} alt={item?.title} />
      </div>
      <h2 className={styles.card_title}>{item?.title}</h2>
      <div
        className={styles.card_text}
        dangerouslySetInnerHTML={{ __html: item.text }}
      />
    </div>
  );
};

export default CardItem;
