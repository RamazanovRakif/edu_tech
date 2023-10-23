import React, { FC } from "react";
import Button from "../Button/Button";

import styles from "./section-title.module.scss";

interface ISectionTitleProps {
  title?: string;
  link?: string;
  moreBtn?: string;
  align?: "start" | "center" | "end";
}

const SectionTitle: FC<ISectionTitleProps> = ({
  title,
  link,
  moreBtn,
  align,
}) => (
  <div className={`section ${styles.section_row}`}>
    {!!title && (
      <h2 className={styles.section_title} style={{ textAlign: align }}>
        {title}
      </h2>
    )}
    {!!moreBtn && (
      <div className={styles.section_title_link}>
        <Button href={link} type="light">
          {moreBtn}
        </Button>
      </div>
    )}
  </div>
);

export default SectionTitle;
