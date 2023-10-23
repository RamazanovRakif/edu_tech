import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer, Input } from "antd";
import { FC, useState } from "react";
import SideDrawer from "../../../ui/Drawer/Drawer";

import { Sidebar } from "../SideMenu/SideMenu";

import styles from './mobile-header.module.scss';

const HeaderMobile: FC = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showSearchDrawer = () => {
    setSearchOpen(true);
  };

  const onCloseSearchIcon = () => {
    setSearchOpen(false);
  };
  const customCloseIcon = (
    <div
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        cursor: "pointer",
      }}
      onClick={onClose}
    >
      <CloseOutlined />
    </div>
  );
  return (
    <div className="container">
      <div className={styles.mobile_header}>
        <div className={styles.mobile_logo}>Ramazanov</div>

        <div className={styles.mobile_menu}>
          <MenuOutlined onClick={showDrawer} />
          <SideDrawer
            title="Ramazanov Edu"
            placement="right"
            onClose={onClose}
            open={open}
          >
            <Sidebar />
          </SideDrawer>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
