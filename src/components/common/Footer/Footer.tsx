import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";

import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook, ImWhatsapp, ImLinkedin } from "react-icons/im";



const Footer = () => {
  const footerMenuData = [
    {
      id: 1,
      href: "/",
      icon: <BsInstagram />,
    },
    {
      id: 2,
      href: "/",
      icon: <ImFacebook />,
    },
    {
      id: 3,
      href: "/",
      icon: <ImLinkedin />,
    },
    {
      id: 4,
      href: "/",
      icon: <ImWhatsapp />,
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
