import React from "react";
import Image from "next/image";
import classNames from "classnames";

import InstructorImg from "../../../assets/images/instructor.png";

import styles from "./about-instructor.module.scss";

const AboutInstructor = () => {
  return (
    <div className="container">
      <section className={classNames(styles.about, "section")} id="about">
        <h2 className="section_title">About the instructor</h2>
        <div className={styles.section_content}>
          <div className={styles.about_image}>
            <Image src={InstructorImg} alt=""/>
          </div>

          <article className={styles.about_content}>
            <h2 className={styles.about_content_title}>Rakif Ramazanov</h2>
            <p className={styles.about_content_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas,ac scelerisque ante pulvinar. Donec ut rhoncus
              ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
              bibendum lorem. Morbi convallis convallis diam sit amet lacinia.
              Aliquam in elementum tellus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default AboutInstructor;
