import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  People,
  HeroButton,
  HeroImageContainer,
  HeroImage,
} from "./styles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>A creative design studio </HeroTitle>
        <HeroSubtitle>
          We're a creative design studio specializing in meeting the needs of
          the new generation. We offer innovative and cutting-edge design
          solutions to help our clients stand out in today's fast-paced.
        </HeroSubtitle>
        <People>Believed by more than a thousand people</People>
        <HeroButton>Book a free consultation</HeroButton>
      </HeroContent>

      <HeroImageContainer>
        <HeroImage
          src="https://images.unsplash.com/photo-1716703373041-bd135107d947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagen Representativa de la Agencia"
        />
      </HeroImageContainer>
    </HeroSection>
  );
};

export default Hero;
