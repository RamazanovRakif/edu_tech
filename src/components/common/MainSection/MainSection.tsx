import React from "react";
import Image from "next/image";

import grid_1 from "../../../assets/images/grid_1.svg";
import grid_2 from "../../../assets/images/grid_2.svg";
import grid_3 from "../../../assets/images/grid_3.svg";
import grid_4 from "../../../assets/images/grid_4.svg";

import styles from "./main-section.module.scss";
import Button from "@/components/ui/Button/Button";

const MainSection = () => {
  return (
    <div className="container">
      <section className="section">
        <div className={styles.main_content}>
          <article>
            <h2 className={styles.main_content_title}>
              Be ready to learn in new methods
            </h2>
            <p className={styles.main_content_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </p>
          </article>

          <div className={styles.images_grid}>
            <div className={styles.images_grid_left}>
              <div className={styles.grid_one}>
                <Image src={grid_1} alt="" />
              </div>
              <div className={styles.grid_two}>
                <Image src={grid_3} alt="" />
              </div>
            </div>
            <div className={styles.images_grid_right}>
              <div className={styles.grid_three}>
                <Image src={grid_4} alt="" />
              </div>
              <div className={styles.grid_four}>
                <Image src={grid_2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <button className={styles.join_us}>Join Us</button>
      </section>
    </div>
  );
};

export default MainSection;
