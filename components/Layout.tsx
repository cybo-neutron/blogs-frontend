import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout(props: any) {
  return (
    <>
      <NavBar />
      <div className="flex flex-col px-20 mb-20">{props.children}</div>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
