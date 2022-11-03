import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout(props: any) {
  return (
    <>
      <NavBar />
      {props.children}
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
