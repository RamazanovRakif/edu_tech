import React from "react";
import Accordion from "../../ui/Accordion/Accordion";
import styles from "./faq.module.scss";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <div className="container">
      <div className="section">
        <SectionTitle
          title="Frequently Asked Questions"
          align="center"
          btnType="light"
        />
        <div className={styles.accordion_container}>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;
