import { useEffect, useRef, useState } from "react";
import {
  FeedbacksContainer,
  Text,
  FeedbacksWrapper,
  LeftSide,
  RightSide,
  TestimonialCard,
  Image,
  AvatarContent,
  AvatarContentWrapper,
} from "./styles";

import { testimonials } from "../../types/Types";
import { FaStar } from "react-icons/fa";

interface FeedBackProps {
  id?: string;
}

const FeedBack: React.FC<FeedBackProps> = ({ id }) => {
  const lastCardRef = useRef(null);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting); // Fijo mientras el último testimonio no sea visible
      },
      { root: null, threshold: 1.0 }
    );

    const currentRef = lastCardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <FeedbacksContainer id={id}>
      <FeedbacksWrapper>
        <LeftSide style={{ position: isSticky ? "sticky" : "relative" }}>
          <Text>
            <h2>Appreciation from our loving clients</h2>
            <p>
              It's wonderful to hear that our clients appreciate our services!
              Client appreciation is valuable proof of the quality of our work.
            </p>
          </Text>
        </LeftSide>
        <RightSide>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              ref={index === testimonials.length - 1 ? lastCardRef : null} // Último testimonio
            >
              <div>
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <FaStar
                    key={idx}
                    style={{ color: "#d0e016", margin: ".2rem" }}
                  />
                ))}
              </div>
              <p className="comment">{testimonial.comment}</p>

              <AvatarContentWrapper>
                <Image>
                  <img src={testimonial.avatar} alt="client" />
                </Image>
                <AvatarContent>
                  <h3 className="name">{testimonial.name}</h3>
                  <p className="designation">{testimonial.designation}</p>
                </AvatarContent>
              </AvatarContentWrapper>
              <hr
                style={{
                  width: "100%",
                  border: "none",
                  height: "1px",
                  backgroundColor: "black",
                }}
              />
            </TestimonialCard>
          ))}
        </RightSide>
      </FeedbacksWrapper>
    </FeedbacksContainer>
  );
};

export default FeedBack;
