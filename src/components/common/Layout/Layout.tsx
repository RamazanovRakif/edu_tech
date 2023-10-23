import { FC, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type Layout = {
  header?: ReactNode;
  //   footer?: ReactNode;
  children?: ReactNode;
};

const layout: FC<Layout> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
