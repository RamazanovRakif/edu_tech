import React, { FC, ReactNode } from "react";
import { Drawer } from "antd";
import { AiOutlineClose } from "react-icons/ai";

interface ISideDrawerProps {
  title?: string;
  placement: "left" | "right" | "bottom";
  onClose: (e: React.MouseEvent | React.KeyboardEvent) => void;
  open: boolean;
  children?: ReactNode;
}

const SideDrawer: FC<ISideDrawerProps> = ({
  title,
  placement,
  open,
  onClose,
  children,
}) => {
  return (
    <Drawer
      title={title}
      placement={placement}
      closable={true}
      onClose={onClose}
      open={open}
      key={placement}
      closeIcon={<AiOutlineClose />}
      maskClosable

    >
      {children}
    </Drawer>
  );
};

export default SideDrawer;
