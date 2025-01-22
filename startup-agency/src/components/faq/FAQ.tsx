import React, { useState } from "react";
import { FaqContainer, FaqCardWrapper, FaqCard } from "./styles";
import { faq } from "../../types/Types";

interface FaqProps {
  id?: string;
}

const FAQ: React.FC<FaqProps> = ({ id }) => {
  const [clicked, setClicked] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <FaqContainer id={id}>
      <h2>Ask us if you have doubts or questions</h2>

      <FaqCardWrapper>
        <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
          {faq
            .map((item, index) => (
              <FaqCard key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <h3>{item.question}</h3>
                  {typeof item.icon === "function" && (
                    <item.icon
                      className={`arrow-icon ${
                        clicked === index ? "rotated" : ""
                      }`}
                      onClick={() => handleClick(index)}
                    />
                  )}
                </div>
                <div
                  className={`answer-wrapper ${
                    clicked === index ? "active" : ""
                  }`}
                >
                  <p className="answer">{item.answer}</p>
                </div>
              </FaqCard>
            ))
            .slice(0, 3)}
        </div>
        <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
          {faq
            .map((item, index) => (
              <FaqCard key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <h3>{item.question}</h3>
                  {typeof item.icon === "function" && (
                    <item.icon
                      className={`arrow-icon ${
                        clicked === index ? "rotated" : ""
                      }`}
                      onClick={() => handleClick(index)}
                    />
                  )}
                </div>
                <div
                  className={`answer-wrapper ${
                    clicked === index ? "active" : ""
                  }`}
                >
                  <p className="answer">{item.answer}</p>
                </div>
              </FaqCard>
            ))
            .slice(3, 6)}
        </div>
      </FaqCardWrapper>
    </FaqContainer>
  );
};

export default FAQ;
