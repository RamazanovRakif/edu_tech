import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

import questionsImg from "../../../assets/images/questions.png";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.banner_container}>
          <div className={styles.banner}>
            <article className={styles.banner_content}>
              <h2 className={styles.banner_content_title}>
                You can contact us whenever you want
              </h2>
              <p className={styles.banner_content_description}>
                If you have questions about the courses or don’t know what to
                choose, leave your number: we will call to answer all your
                questions.
              </p>
              <Button type='light'>
                Leave a request <IoIosArrowForward />
              </Button>
            </article>
            <div className={styles.banner_image}>
              <Image src={questionsImg} alt="" width={360} height={300} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
