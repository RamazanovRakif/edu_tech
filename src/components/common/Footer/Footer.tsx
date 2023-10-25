import React from "react";
import Link from "next/link";

import { AiFillInstagram, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

import styles from "./footer.module.scss";

const Footer = () => {
  const footerMenuData = [
    {
      id: 1,
      href: "/",
      icon: <AiFillInstagram />,
    },
    {
      id: 2,
      href: "/",
      icon: <FaFacebookF />,
    },
    {
      id: 3,
      href: "/",
      icon: <FaLinkedinIn />,
    },
    {
      id: 4,
      href: "/",
      icon: <RiWhatsappFill />,
    },
  ];
  return (
    <footer className={styles.footer}>
      <div className="container">
        <section className={styles.footer_content}>
          <h2 className={styles.footer_logo}>RRamazanov</h2>
          <ul className={styles.footer_menu}>
            {footerMenuData.length &&
              footerMenuData.map((item) => (
                <li className={styles.footer_menu_item} key={item.id}>
                  <Link href={item.href}>{item.icon}</Link>
                </li>
              ))}
          </ul>

          <div className={styles.reserved}>
            <AiOutlineCopyrightCircle />
            2023 All rights reserved
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
