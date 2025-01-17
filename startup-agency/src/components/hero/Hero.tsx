import { HeroContainer, BtnWrapper } from "./styles";
import Button from "../common/buttons/Button";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <h1>Start your business growth journey with us</h1>
      <h2>
        We believe in the power of innovation and are passionate about helping
        startups thrive. As a startup company, we are a dynamic and innovative
        organization that provides comprehensive support, guidance and resources
        to early stage startups.
      </h2>

      <BtnWrapper>
        <Button
           className="btn-hero1"
          >Get in Touch</Button>
        <Button
            className="btn-hero2"
        >Explore Our Services</Button>
      </BtnWrapper>
    </HeroContainer>
  );
};

export default Hero;
