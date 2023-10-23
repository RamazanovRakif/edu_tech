import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

interface IButtonProps {
  buttonTitle?: string;
  href?: string;
  children?: ReactNode;
  type: "primary" | "secondary" | "light";
}

const Button: FC<IButtonProps> = ({ href, children, type }) => {
  return (
    <a
      className={classNames(styles.btn, {
        [styles[type]]: true,
      })}
      href={href}
    >
      {children}
    </a>
  );
};

export default Button;
