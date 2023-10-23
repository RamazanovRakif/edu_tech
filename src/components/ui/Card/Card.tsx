import Image from "next/image";
import React from "react";
import classNames from "classnames";
import styles from "./card.module.scss";
import certificate from "../../../assets/images/star.png";
import training from "../../../assets/images/training.png";
import internship from "../../../assets/images/arrow.png";
import mentor from "../../../assets/images/mentor.png";
import file from "../../../assets/images/file.png";
import career from "../../../assets/images/career.png";

type FeatureCardProps = {
  title: string;
  text?: string;
  img?: any;
  id: string | number;
};

const FeatureCards = () => {
  const data = [
    {
      id: 1,
      title: "Get certificate",
      img: certificate,
      text: "We are providing a certificate to you after completing your courseand this will help you future",
    },
    {
      id: 2,
      img: training,
      title: "Interview preparation training",
      text: "In this training, we will share real experiences with you, make you aware of the questions and tasks that await you, and fully prepare you for the interview.",
    },
    {
      id: 3,
      img: internship,
      title: "Internship programs",
      text: "All job postings require experience. We will provide the internship program after successful graduation!",
    },
    {
      id: 4,
      img: mentor,
      title: "Mentor support",
      text: "Our mentors are always there to facilitate  the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.",
    },
    {
      id: 5,
      img: career,
      title: "Career support",
      text: "Our professional team will help you for a successful career. Our business relations will provide an opportunity to start working life quickly.",
    },
    {
      id: 6,
      img: file,
      title: "CV preparation support",
      text: "Our graduates work in local and global companies with the CVs we prepared.",
    },
  ];
  const renderCard = (item: FeatureCardProps) => {
    return (
      <div className={styles.card} key={item?.id}>
        <Image src={item.img} width={70} height={70} alt={item?.title} />
        <h2 className={styles.card_title}>{item?.title}</h2>
        <p className={styles.card_text}>{item?.text}</p>
      </div>
    );
  };
  return (
    <div className="container">
      <section className="section" id="features">
        <h2 className="section_title">Features</h2>
        <div className={styles.feature_cards}>
          {!!data.length && data.map((card) => renderCard(card))}
        </div>
      </section>
    </div>
  );
};

export default FeatureCards;
