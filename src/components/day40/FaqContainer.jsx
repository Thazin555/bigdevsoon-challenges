import React, { useState } from "react";
import FaqHeader from "./FaqHeader";
import FaqBox from "./FaqBox";

const FaqContainer = () => {
  const [faqs, setFaq] = useState([
    {
      id: 1,
      question: "What is coding?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus natus ea esse molestias impedit omnis non id quasi a libero vitae voluptatem ratione assumenda ducimus nihil magnam, eligendi ipsa aliquam.",
      hide: true,
    },
    {
      id: 2,
      question: "Which programming language should I learn first?",
      answer:
        "The best programming language to start with depends on your goals and interests. Python is often recommended for beginners due to its simple syntax and versatility. Other popular options include JavaScript, Java, and C++.",
      hide: false,
    },
    {
      id: 3,
      question: "How do I improve my coding skills?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus natus ea esse molestias impedit omnis non id quasi a libero vitae voluptatem ratione assumenda ducimus nihil magnam, eligendi ipsa aliquam.",
      hide: true,
    },
    {
      id: 4,
      question: "How do I debug my code effectively?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus natus ea esse molestias impedit omnis non id quasi a libero vitae voluptatem ratione assumenda ducimus nihil magnam, eligendi ipsa aliquam.",
      hide: true,
    },
    {
      id: 5,
      question: "What ar APIs, and how do they work?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus natus ea esse molestias impedit omnis non id quasi a libero vitae voluptatem ratione assumenda ducimus nihil magnam, eligendi ipsa aliquam.",
      hide: true,
    },
  ]);

  const hideShow = (id) => {
    // console.log(id);
    setFaq(
      faqs.map((faq) => {
        if (faq.id === id) {
          faq.hide = !faq.hide;
          return faq;
        } else {
          faq.hide = true;
          return faq;
        }
      })
    );
  };
  return (
    <div className="max-w-lg p-5 bg-white absolute w-full left-0 right-0 mx-auto top-[96px] rounded-xl shadow-md">
      <FaqHeader />
      {faqs.map((faq) => (
        <FaqBox
          key={faq.id}
          id={faq.id}
          question={faq.question}
          answer={faq.answer}
          hide={faq.hide}
          hideShow={hideShow}
        />
      ))}
    </div>
  );
};

export default FaqContainer;
