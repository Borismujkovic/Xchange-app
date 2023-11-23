import { Fragment } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useUser } from "@/src/store/user";

const Layout = (props: any) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
