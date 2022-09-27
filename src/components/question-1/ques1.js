import React, { useState } from "react";
import Faq from "./Faq";
import "./ques1.css";

const Ques1 = () => {
  const faqDetails = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];

  const propData = faqDetails.map((e, index) => {
    e = { ...e, isHidden: index === 0 ? false : true };
    return e;
  });

  const [faqState, setFaqState] = useState(propData);

  const handleToggle = (e, index) => {
    const newFaqState = [...faqState];
    newFaqState.forEach((e, i) => {
      if (i === index) {
        e.isHidden = e.isHidden === true ? false : true;
      }
    });
    setFaqState(newFaqState);
  };

  return (
    <div>
      {faqState.map((e, index) => {
        return (
          <Faq
            question={e.question}
            answer={e.answer}
            isHidden={e.isHidden}
            handleToggle={handleToggle}
            index={index}
            key={index}></Faq>
        );
      })}
    </div>
  );
};

export default Ques1;
