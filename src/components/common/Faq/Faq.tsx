import React from "react";
import Accordion from "../../ui/Accordion/Accordion";
import styles from "./faq.module.scss";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <div className="container">
      <div className="section">
        <h2 className="section_title">Frequently Asked Questions</h2>
        <div className={styles.accordion_container}>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;
