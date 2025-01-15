import { useState } from "react";
import {
  WorkProcessSection,
  WorkingProcessContainer,
  BrainStormingWrapper,
  BrainStorming,
  Title,
  Toggle,
} from "./styles";
import { brainStorming, workProcessing } from "../../types/Types";
import { IoIosArrowDown } from "react-icons/io";
import { theme } from "../../styles/theme";
import { FaStarOfLife } from "react-icons/fa";
import {
  containerVariants,
  animationConfig,
  itemVariants,
} from "../../animations/variants";

const WorkProcess = () => {
  const [togleIndex, setTogleIndex] = useState<number | null>(null);

  const handleTogle = (index: number) => {
    setTogleIndex(index === togleIndex ? null : index);
  };

  return (
    <WorkProcessSection id="workProcess">
      <WorkingProcessContainer>
        {workProcessing.map((item, index) => (
          <Title key={index}>
            <p>
              {item.content}
              {index === 0 && (
                <FaStarOfLife
                  className="star-icon"
                  style={{
                    color: `${theme.colors.bgGreen}`,
                    position: "absolute",
                    top: ".7rem",
                    right: "9.5rem",
                  }}
                />
              )}
            </p>
          </Title>
        ))}
      </WorkingProcessContainer>

      <BrainStorming variants={containerVariants} {...animationConfig}>
        {brainStorming.map((item, index) => (
          <BrainStormingWrapper
            variants={itemVariants}
            key={item.id}
            style={{
              background:
                togleIndex === index ? `${theme.colors.bgGreen}` : `#fff`,
              boxShadow: togleIndex === index ? `3px 3px 0 #000` : `none`,
            }}
          >
            <Toggle>
              <h3>{item.title}</h3>
              <IoIosArrowDown
                onClick={() => handleTogle(index)}
                style={{
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  transform: togleIndex === index ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Toggle>
            <div
              style={{
                maxHeight: togleIndex === index ? "100px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <p>{item.description}</p>
            </div>
          </BrainStormingWrapper>
        ))}
      </BrainStorming>
    </WorkProcessSection>
  );
};

export default WorkProcess;
