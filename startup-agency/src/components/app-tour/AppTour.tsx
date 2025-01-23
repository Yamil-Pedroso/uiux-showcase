import React, { useState, useEffect } from "react";
import images from "../../assets/images";
import {
  AppTourContainer,
  AppTourTooltip,
  AppTourWrapper,
  AppTourButton,
  AppTourBtnWrapper,
} from "./styles";
import { TbArrowBigRightFilled } from "react-icons/tb";
import { FaStop } from "react-icons/fa";

interface Step {
  target: string;
  content: string;
  position?: { top: number; left: number };
}

const Tour: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visible, setVisible] = useState(true);
  const [tooltipPosition, setTooltipPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const steps: Step[] = [
    {
      target: "div#home",
      content: "This is the navigation menu.",
      position: { top: -280, left: 0 },
    },
    {
      target: "div#hero",
      content: "This is the main header of the page.",
      position: { top: 0, left: 0 },
    },
    {
      target: "div#team-gallery",
      content: "Here you can see our team.",
      position: { top: -50, left: 30 },
    },
    {
      target: "div#results-sponsors",
      content: "These are the results and sponsors.",
      position: { top: -100, left: -20 },
    },
    {
      target: "div#features",
      content: "These are the main features.",
      position: { top: -80, left: 0 },
    },
    {
      target: "div#fun-facts",
      content: "These are the fun facts.",
      position: { top: 10, left: 0 },
    },
    {
      target: "div#services",
      content: "Discover the services we offer.",
      position: { top: 500, left: 50 },
    },
    {
      target: "div#price-plans",
      content: "Here you can see our pricing plans.",
      position: { top: 200, left: 0 },
    },
    {
      target: "div#feedback",
      content: "These are our customer reviews.",
      position: { top: -50, left: -30 },
    },
    {
      target: "div#faq",
      content: "Frequently asked questions.",
      position: { top: -50, left: 0 },
    },
    {
      target: "div#get-in-touch",
      content: "Get in touch with us.",
      position: { top: -70, left: -10 },
    },
    {
      target: "div#contact",
      content: "Contact information.",
      position: { top: -300, left: 0 },
    },
    {
      target: "div#footer",
      content: "This is the footer.",
      position: { top: -500, left: 0 },
    },
  ];

  const calculateTooltipPosition = (
    target: string,
    position?: { top: number; left: number }
  ) => {
    const element = document.querySelector(target);
    if (element) {
      const rect = element.getBoundingClientRect();

      let top = rect.top + window.scrollY;
      let left = rect.left + window.scrollX;

      if (position) {
        top += position.top;
        left += position.left;
      } else {
        top -= 50;
        left += rect.width / 2;
      }

      return { top, left };
    }
    return { top: 0, left: 0 };
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToStep = (index: number) => {
    const step = steps[index];
    const position = calculateTooltipPosition(step.target, step.position);

    setTooltipPosition(position);

    const element = document.querySelector(step.target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setVisible(false);
      scrollUp();
    }
  };

  const handleSkip = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (visible) {
      scrollToStep(currentStep);
    }
  }, [currentStep, visible]);

  if (!visible) return null;

  return (
    <AppTourContainer>
      {/* Tooltip */}
      <AppTourTooltip>
        <AppTourWrapper top={tooltipPosition.top} left={tooltipPosition.left}>
          <p>{steps[currentStep].content}</p>
          <AppTourBtnWrapper>
            <AppTourButton
              style={{
                display: currentStep < steps.length - 1 ? "block" : "none",
              }}
              onClick={handleSkip}
            >
              <FaStop size={20} />
            </AppTourButton>
            <AppTourButton onClick={handleNext}>
              {currentStep < steps.length - 1 ? (
                <TbArrowBigRightFilled size={35} className="arrow-right" />
              ) : (
                <button style={{ backgroundColor: "#1b1b1b", border: "none", color: "#fff", padding: "0.5rem 1rem", cursor: "pointer" }}>
                  Finish
                </button>
              )}
            </AppTourButton>
          </AppTourBtnWrapper>
          <img src={images.toolTipChar} alt="Tour" />
        </AppTourWrapper>
      </AppTourTooltip>
    </AppTourContainer>
  );
};

export default Tour;
