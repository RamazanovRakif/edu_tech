import { FC, useState } from "react";
import SideDrawer from "../../../ui/Drawer/Drawer";
import { Sidebar } from "../SideMenu/SideMenu";
import { AiOutlineMenu } from "react-icons/ai";
import styles from "./mobile-header.module.scss";

const HeaderMobile: FC = ({ isSticky }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  console.log({ isSticky });
  return (
    <header className={styles.mobile_header}>
      <div className="container">
        <div className={styles.mobile_navbar}>
          <div className={styles.mobile_logo}>Ramazanov</div>
          <div className={styles.mobile_menu}>
            <AiOutlineMenu onClick={showDrawer} />
            <SideDrawer
              title="Ramazanov Edu"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <Sidebar onCloseDrawer={onClose} />
            </SideDrawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
