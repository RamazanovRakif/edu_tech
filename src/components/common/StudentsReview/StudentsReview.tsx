import SliderWrapper from "../../ui/SliderWrapper/SliderWrapper";
import Image from "next/image";
import React from "react";
import reviewImg from "../../../assets/images/instructor.png";
import styles from "./students-review.module.scss";

const StudentsReview = () => {
  const ReviewCard = (card: any) => {
    return (
      <>
        <div className={styles.review_card}>
          <Image
            src={reviewImg}
            width={129}
            height={129}
            objectFit="cover"
            alt={""}
          />
          <p className={styles.review_card_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className={styles.review_card_shape}></div>
          <div className={styles.review_card_personal}>
            <h2 className={styles.review_card_personal_name}>Jan Stiedemann</h2>
            <h3 className={styles.review_card_personal_job}>
              Global Applications Representative
            </h3>
          </div>
        </div>
      </>
    );
  };

  const arr = [
    {
      id: 0,
      title: "",
    },
    {
      id: 1,
      title: "",
    },

    {
      id: 2,
      title: "",
    },

    {
      id: 3,
      title: "",
    },
    {
      id: 4,
      title: "",
    },
    {
      id: 5,
      title: "",
    },
  ];
  return (
    <div className="container" style={{ overflowX: "hidden" }}>
      <section className="section">
        <h2 className="section_title">Students review</h2>
        <SliderWrapper>
          {arr.map((data) => (
            <ReviewCard card={data} key={data?.id} />
          ))}
        </SliderWrapper>
      </section>
    </div>
  );
};

export default StudentsReview;
