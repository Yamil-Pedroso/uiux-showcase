import React, { useEffect, useState } from "react";
import {
  ProjectsSection,
  Image,
  Title,
  SliderContainer,
  CardsContainer,
  Card,
  CardContent,
  NavigationWrapper,
  NavigationBar,
  NavigationIndicator,
  //NavButton,
} from "./styles";
import { projects, IServices } from "../../types/Types";

const Projects: React.FC<IServices> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleIndicators, setVisibleIndicators] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  //const [offset, setOffset] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    // Function to set the number of indicators based on screen size
    const updateIndicators = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setVisibleIndicators(4); // Show 5 indicators on smaller screens
      } else {
        setVisibleIndicators(3); // Default to 3 indicators on larger screens
      }
    };

    // Initial check
    updateIndicators();

    // Add resize event listener
    window.addEventListener("resize", updateIndicators);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateIndicators);
  }, []);

  const handleNavigationClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleWheel = (event: React.WheelEvent) => {
    if (event.deltaY < 0) {
      handlePrev(); // Scroll up
    } else {
      handleNext(); // Scroll down
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      if (Math.abs(deltaX) > 50) {
        // Threshold to change slides
        if (deltaX > 0 && activeIndex > 0) {
          setActiveIndex((prevIndex) => prevIndex - 1);
        } else if (deltaX < 0 && activeIndex < projects.length - 2) {
          setActiveIndex((prevIndex) => prevIndex + 1);
        }
        setStartX(e.clientX); // Reset startX to prevent multiple triggers
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <ProjectsSection id="projects">
      <Title>
        Have a wide range of creative projects <span>*</span>
      </Title>

      <SliderContainer
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <CardsContainer activeIndex={activeIndex}>
          {projects.map((project) => (
            <Card key={project.id}>
              <Image src={project.imageUrl} alt={project.title} />
              <CardContent>
                <div className="text-wrapper">
                  <div className="text">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <span>
                    {typeof project.iconOne === "function"
                      ? React.createElement(project.iconOne)
                      : project.iconOne}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardsContainer>
      </SliderContainer>

      <NavigationWrapper>
        {/*<NavButton onClick={handlePrev} disabled={activeIndex === 0}>
          Prev
        </NavButton>*/}

        <NavigationBar>
          {Array.from({ length: visibleIndicators }).map((_, index) => (
            <NavigationIndicator
              key={index}
              isActive={activeIndex === index}
              onClick={() => handleNavigationClick(index)}
            />
          ))}
        </NavigationBar>

        {/*<NavButton
          onClick={handleNext}
          disabled={activeIndex === projects.length - 2}
        >
          Next
        </NavButton>*/}
      </NavigationWrapper>
    </ProjectsSection>
  );
};

export default Projects;
