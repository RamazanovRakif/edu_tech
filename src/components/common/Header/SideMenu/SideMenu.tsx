import React, { useState } from "react";
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Divider, Menu, Switch } from "antd";
import type { MenuProps } from "antd/es/menu";
import Link from "next/link";
type MenuItem = Required<MenuProps>["items"][number];

interface SidebarProps {
  onCloseDrawer: () => void; // Callback to close the drawer
}

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  items?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    items,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link href="#home">Home</Link>),
  getItem(<Link href="#course">Course</Link>),
  getItem(<Link href="#about">About Us</Link>),
  getItem(<Link href="#features">Features</Link>),
  getItem(<Link href="#contact">Contact</Link>),
];

export const Sidebar: React.FC<SidebarProps> = ({ onCloseDrawer }) => {
  const handleMenuItemClick = () => {
    onCloseDrawer();
  };

  return (
    <>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={"inline"}
        items={items}
        onClick={handleMenuItemClick}
      />
    </>
  );
};
