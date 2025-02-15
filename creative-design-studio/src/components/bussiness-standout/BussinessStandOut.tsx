import { useEffect, useRef, useState } from "react";
import {
  Container,
  TextSection,
  Title,
  Subtitle,
  SubtitleMobile,
  VideoContainer,
  VideoImage,
  PlayVideo,
  PlayButton,
  StatsPanel,
  StatItem,
  StatValue,
  StatDescription,
  LeftSide,
  RightSide,
  Overlay,
} from "./styles";
import { verticalConfig } from "../../animations/variants";
import { FaStarOfLife, FaRegWindowClose } from "react-icons/fa";
import Video from "../common/media/Video";
import { agencyVideo } from "../../assets/media";
import images from "../../assets/images";

const BusinessStandOut = () => {
  const [startCount, setStartCount] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [clickPlay, setClickPlay] = useState(false);

  const handleClick = () => {
    setClickPlay((prev) => !prev);
  };

  useEffect(() => {
    const currentStatRef = statRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
          } else {
            // Reinicia los valores cuando el componente sale del viewport
            setStartCount(false);
            setExperience(0);
            setProjects(0);
            setSatisfaction(0);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentStatRef) {
      observer.observe(currentStatRef);
    }

    return () => {
      if (currentStatRef) {
        observer.unobserve(currentStatRef);
      }
    };
  }, []);

  // Count Animation
  useEffect(() => {
    if (startCount) {
      let expCount = 0;
      let projCount = 0;
      let satCount = 0;

      const interval = setInterval(() => {
        expCount = Math.min(expCount + 1, 15);
        projCount = Math.min(projCount + 8, 120);
        satCount = Math.min(satCount + 5, 100);

        setExperience(expCount);
        setProjects(projCount);
        setSatisfaction(satCount);

        if (expCount === 15 && projCount === 120 && satCount === 100) {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [startCount]);
  return (
    <Container id="business" ref={statRef}>
      <LeftSide>
        <TextSection>
          <Title>
            We make your{" "}
            <span>
              <FaStarOfLife size={58} className="icon" />
            </span>{" "}
            business stand out
          </Title>

          <SubtitleMobile>
            We work closely with our clients to know their objectives, target
            audience, unique needs, and practical design solutions.
          </SubtitleMobile>
        </TextSection>
        <Overlay isActive={clickPlay} />
        <VideoContainer {...verticalConfig}>
          <VideoImage src={images.agencyOne} alt="Design Agency" />
          <PlayButton onClick={handleClick}>Play</PlayButton>
        </VideoContainer>
        <PlayVideo
          {...verticalConfig} 
          style={{
            display: clickPlay ? "block" : "none",
          }}
          
        >
          <FaRegWindowClose
            className="close"
            onClick={handleClick}
            size={30}
          />
          <Video className="video"
           width="100%" height="auto"
           src={agencyVideo} />
        </PlayVideo>
      </LeftSide>

      <RightSide>
        <Subtitle>
          We work closely with our clients to know their objectives, target
          audience, unique needs, and practical design solutions.
        </Subtitle>
        <StatsPanel>
          <StatItem>
            <StatValue>{experience}+</StatValue>
            <StatDescription>Years of experience</StatDescription>
          </StatItem>
          <div
            style={{
              width: "80%",
              height: "1px",
              backgroundColor: "#696969",
              margin: "0 2rem",
            }}
          />
          <StatItem>
            <StatValue>{projects}k</StatValue>
            <StatDescription>Successful projects</StatDescription>
          </StatItem>
          <div
            style={{
              width: "80%",
              height: "1px",
              backgroundColor: "#696969",
              margin: "0 2rem",
            }}
          />
          <StatItem>
            <StatValue>{satisfaction}%</StatValue>
            <StatDescription>Client satisfaction rate</StatDescription>
          </StatItem>
        </StatsPanel>
      </RightSide>
    </Container>
  );
};

export default BusinessStandOut;
