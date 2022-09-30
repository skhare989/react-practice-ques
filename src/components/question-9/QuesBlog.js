import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import "./styles.css";
const QuesBlog = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default QuesBlog;
