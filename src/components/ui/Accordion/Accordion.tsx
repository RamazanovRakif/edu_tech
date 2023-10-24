"use client";

import { BiPlus, BiMinus } from "react-icons/bi";
import React, { useState } from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import styles from "./accordion.module.scss";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const text2 = `
A dog is a type of domesticated animal.A dog is a type of domesticated animal.A dog is a type of domesticated animal.A dog is a type of domesticated animal.A dog is a type of domesticated animal.A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Accordion: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string | string[]>(["1"]);

  const onChange = (key: string | string[]) => {
    setActiveKey(key);
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      children: <div>{text}</div>,
    },
    {
      key: "2",
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      children: <div>{text2}</div>,
    },
    {
      key: "3",
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      children: <div>{text}</div>,
    },
    {
      key: "4",
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      children: <div>{text}</div>,
    },
    {
      key: "5",
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      children: <div>{text2}</div>,
    },
  ];

  return (
    <>
      <Collapse
        activeKey={activeKey}
        bordered
        onChange={onChange}
        expandIconPosition="end"
        className={styles.accordion}
        ghost
        size="middle"
      >
        {!!items?.length &&
          items.map((item: any) => (
            <Collapse.Panel
              key={item?.key}
              header={<p className={styles.accordion_header}>{item?.label}</p>}
              showArrow={false}
              extra={activeKey.includes(item?.key) ? <BiMinus /> : <BiPlus />}
            >
              <span className={styles.accordion_content}>{item.children}</span>
            </Collapse.Panel>
          ))}
      </Collapse>
    </>
  );
};

export default Accordion;
