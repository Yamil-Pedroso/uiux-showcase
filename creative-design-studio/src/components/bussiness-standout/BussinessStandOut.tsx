import {
  Container,
  TextSection,
  Title,
  Subtitle,
  VideoContainer,
  VideoImage,
  PlayButton,
  StatsPanel,
  StatItem,
  StatValue,
  StatDescription,
  RightSide,
} from "./styles";

const BusinessStandOut = () => {
  return (
    <Container id="business">
      <div>
        <TextSection>
          <Title>
            We make your <span>*</span> business stand out
          </Title>
        </TextSection>
        <VideoContainer>
          <VideoImage
            src="https://images.unsplash.com/photo-1481887328591-3e277f9473dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVzaWduJTIwYWdlbmN5fGVufDB8fDB8fHww"
            alt=""
          />
          <PlayButton>Play</PlayButton>
        </VideoContainer>
      </div>

      <RightSide>
        <Subtitle>
          We work closely with our clients to know their objectives, target
          audience, unique needs, and practical design solutions.
        </Subtitle>
        <StatsPanel>
          <StatItem>
            <StatValue>15+</StatValue>
            <StatDescription>Years of experience</StatDescription>
          </StatItem>
          <StatItem>
            <StatValue>120k</StatValue>
            <StatDescription>Successful projects</StatDescription>
          </StatItem>
          <StatItem>
            <StatValue>100%</StatValue>
            <StatDescription>Client satisfaction rate</StatDescription>
          </StatItem>
        </StatsPanel>
      </RightSide>
    </Container>
  );
};

export default BusinessStandOut;
