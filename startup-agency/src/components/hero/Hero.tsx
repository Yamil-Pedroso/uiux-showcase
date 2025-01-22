import { HeroContainer, BtnWrapper } from "./styles";
import Button from "../common/buttons/Button";
import { motion } from "framer-motion";
import images from "../../assets/images";

interface HeroProps {
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <HeroContainer id={id}>
      <h2>Start your business growth journey with us</h2>
      <h3>
        We believe in the power of innovation and are passionate about helping
        startups thrive. As a startup company, we are a dynamic and innovative
        organization that provides comprehensive support, guidance and resources
        to early stage startups.
      </h3>

      <BtnWrapper
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
              type: "spring",
              stiffness: 80,
              damping: 20,
            },
          },
        }}
      >
        <Button
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="btn-hero1"
        >
          Get in Touch
        </Button>
        <Button
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="btn-hero2"
        >
          Explore Our Services
        </Button>
      </BtnWrapper>

      <img className="deco1" src={images.deco1} alt="hero" />
      <img className="deco2" src={images.deco2} alt="hero" />
    </HeroContainer>
  );
};

export default Hero;
