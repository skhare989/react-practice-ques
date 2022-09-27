import React from "react";
import "./Faq.css";

const Faq = ({ question, answer, isHidden, handleToggle, index }) => {
  return (
    <div className={"faq-container"}>
      <button
        onClick={(e) => {
          handleToggle(e, index);
        }}>
        {isHidden ? "Expand" : "Hide"}
      </button>
      <div>{question}</div>
      <div>{isHidden ? "" : answer}</div>
    </div>
  );
};

export default Faq;
