"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

import Logo from "../../../assets/images/logo.png";
import Language from "./Language/Language";

import styles from "./header.module.scss";
import Button from "../../ui/Button/Button";
import useWindowSize from "../../../hooks/useWindowSize";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [size] = useWindowSize();
  const [isSticky, setIsSticky] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState<number | string>(1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuLinks = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Course",
      href: "/",
    },
    {
      id: 3,
      name: "Abous Us",
      href: "/#about",
    },
    {
      id: 4,
      name: "Features",
      href: "#features",
    },
    {
      id: 5,
      name: "FAQ",
      href: "/",
    },
  ];

  const onClickHandler = (id: number | string) => {
    setActiveMenuId(id);
  };

  return (
    <>
      {size > 768 ? (
        <header className={`${styles.header} ${isSticky && styles.sticky}`}>
          <div className="container">
            <nav className={styles.navbar}>
              <ul className={styles.menu}>
                {menuLinks.map((menu) => (
                  <li
                    className={classNames(
                      styles.menu_item,
                      Number(activeMenuId) === Number(menu.id) &&
                        styles.selected
                    )}
                    key={menu.id}
                    onClick={() => onClickHandler(menu.id)}
                  >
                    <Link href={menu.href}>{menu.name}</Link>
                  </li>
                ))}
              </ul>

              <div className={styles.logo}>
                <Image src={Logo} alt={""} />
              </div>

              <div className={styles.menu_right}>
                <div className={styles.lang}>
                  <Language />
                </div>
                <div>
                  <Button type="primary">
                    Apply <IoIosArrowForward />
                  </Button>
                </div>
              </div>

              <div className={styles.mobile_menu}>
                <AiOutlineMenu />
              </div>
            </nav>
          </div>
        </header>
      ) : (
        <HeaderMobile />
      )}
    </>
  );
};

export default Header;
