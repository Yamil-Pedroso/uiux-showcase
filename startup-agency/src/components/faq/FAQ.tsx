import {
  FaqContainer,
  FaqCardWrapper,
  FaqCard,
} from "./styles";
import { faq } from "../../types/Types";

const FAQ = () => {
  return (
    <FaqContainer>
      <h2>Ask us if you have doubts or questions</h2>

      <FaqCardWrapper>
        <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
          {faq
            .map((item, index) => (
              <FaqCard key={index}>
                <div className="content-left">
                  <h3>{item.question}</h3>
                  <p className="answer">{item.answer}</p>
                </div>

                {typeof item.icon === "function" && (
                  <item.icon className="arrow-icon" />
                )}
              </FaqCard>
            ))
            .slice(0, 3)}
        </div>
        <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
          {faq
            .map((item, index) => (
              <FaqCard key={index}>
                <div className="content-right">
                  <h3>{item.question}</h3>
                  <p className="answer">{item.answer}</p>
                </div>

                {typeof item.icon === "function" && (
                  <item.icon className="arrow-icon" />
                )}
              </FaqCard>
            ))
            .slice(3, 6)}
        </div>
      </FaqCardWrapper>
    </FaqContainer>
  );
};

export default FAQ;
