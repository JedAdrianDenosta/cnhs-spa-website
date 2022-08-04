import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen h-full flex flex-col scroll-smooth">
      <Nav />
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
