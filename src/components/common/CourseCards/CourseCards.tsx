import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import React from "react";
import courseImg from "../../../assets/images/course.png";
import styles from "./course-cards.module.scss";
import Image from "next/image";
import CardItem from "@/components/common/CourseCards/CourseCardItem";

import userIcon from "../../../assets/images/1.svg";
import curriculumIcon from "../../../assets/images/2.svg";
import syllabusIcon from "../../../assets/images/3.svg";
import codeIcon from "../../../assets/images/4.svg";

const CourseCards = () => {
  const data = [
    {
      id: 1,
      title: "Get certificate",
      img: codeIcon,
      text: "We are providing a certificate to you after completing your courseand this will help you future",
    },
    {
      id: 2,
      img: userIcon,
      title: "Interview preparation training",
      text: "In this training, we will share real experiences with you, make you aware of the questions and tasks that await you, and fully prepare you for the interview.",
    },
    {
      id: 3,
      img: curriculumIcon,
      title: "Internship programs",
      text: "All job postings require experience. We will provide the internship program after successful graduation!",
    },
    {
      id: 4,
      img: syllabusIcon,
      title: "Mentor support",
      text: "Our mentors are always there to facilitate  the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.",
    },
  ];
  return (
    <div className="container">
      <section className="section">
        <h3 className="section_title">Course</h3>
        <SectionTitle
          title="Front end development"
          moreBtn="Apply"
          btnType="primary"
        />

        <div className={styles.course_content}>
          <div className={styles.course_content_image}>
            <Image src={courseImg} alt="" />
          </div>
          <article className={styles.course_content_block}>
            {data.map((item) => (
              <CardItem key={item.id} item={item} />
            ))}
          </article>
        </div>
      </section>
    </div>
  );
};

export default CourseCards;
