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
      title: "What is front-end",
      img: codeIcon,
      text: " When you open a website, menus, visual links with campaigns, colors, fonts and visual placements begin to appear in front of you. This home page you see is the work of a frontend developer",
    },
    {
      id: 2,
      img: userIcon,
      title: "Who is it for",
      text: "Entrepreneurs, students, software developers, web designers from different sectors can join our front-end programming teams. This training is suitable for anyone who wants to learn basic skills related to creating websites and web applications.",
    },
    {
      id: 3,
      img: curriculumIcon,
      title: "Curriculum",
      text: "Our training program lasts for 5 months and each lesson is based on a 2-hour training plan, 2 times a week. Our trainer and mentor are here to fully support our students and ensure their successful learning.",
    },
    {
      id: 4,
      img: syllabusIcon,
      title: "Syllabus",
      text: ` - Git/Github
      </br>
              - HTML 5 
      </br>

              - CSS 3/SASS/Bootstrap 
      </br>

              - Javascript/Typescript/ES 6+
      </br>

              - React/Redux/Redux Toolkit ,
      </br>
      - Next JS (bonus)
       `,
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
