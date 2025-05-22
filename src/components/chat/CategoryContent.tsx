
import React from "react";

type CategoryContentProps = {
  questions: string[];
};

const CategoryContent = ({ questions }: CategoryContentProps) => {
  return (
    <section className="flex flex-col self-start px-3 pt-3 pb-6 bg-white rounded-xl border border-black border-solid">
      {questions.map((question, index) => (
        <p 
          key={index} 
          className={`${index > 0 ? "mt-" + (index % 2 === 0 ? "3.5" : "2.5") : ""} ${index % 2 === 0 ? "self-start" : ""}`}
        >
          {question}
        </p>
      ))}
    </section>
  );
};

export default CategoryContent;
