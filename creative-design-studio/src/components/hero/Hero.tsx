import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  People,
  HeroImageContainer,
  HeroImage,
} from "./styles";
import Button from "../common/buttons/Button";
import { FaStarOfLife } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import images from "../../assets/images";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  animationConfig,
  heroImageContainerVariants,
} from "../../animations/variants";

const persons = [
  {
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds",
  },
  {
    url: "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Hero = () => {
  //const controls = useAnimation();
  //const heroRef = useRef(null);
  //
  //useEffect(() => {
  //  const observer = new IntersectionObserver(
  //    (entries) => {
  //      entries.forEach((entry) => {
  //        if (entry.isIntersecting) {
  //          controls.start({ opacity: 1, y: 0 });
  //        } else {
  //          controls.start({ opacity: 0, y: 100 });
  //        }
  //      });
  //    },
  //    { threshold: 0.5 } // Ajusta el umbral según prefieras
  //  );
  //
  //  if (heroRef.current) {
  //    observer.observe(heroRef.current);
  //  }
  //
  //  return () => {
  //    if (heroRef.current) {
  //      observer.unobserve(heroRef.current);
  //    }
  //  };
  //}, [controls]);

  return (
    <HeroSection id="home">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "100rem",
          margin: "0 auto",
        }}
      >
      <HeroContent variants={containerVariants} {...animationConfig}>
        <HeroTitle variants={itemVariants}>
          A creative{" "}
          <span>
            <FaStarOfLife size={58} className="icon" />
          </span>
          {" "}
          design studio
        </HeroTitle>
        <HeroSubtitle variants={itemVariants}>
          We're a creative design studio specializing in meeting the needs of
          the new generation. We offer innovative and cutting-edge design
          solutions to help our clients stand out in today's fast-paced.
        </HeroSubtitle>
        <People variants={itemVariants}>
          <div className="content">
            {persons.map((person, index) => (
              <div
                className="person-wrapper"
                style={{
                  marginLeft: index === 1 ? "4rem" : index === 2 ? "8rem" : "0",
                }}
              >
                <img
                  src={person.url}
                  alt="Person"
                  key={index}
                  width="100"
                  height="100"
                />
              </div>
            ))}
          </div>
          <p>Believed by more than a thousand people</p>
        </People>
        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            position: "relative",
          }}
        >
          <Button className="hero-btn">
            Book a free consultation
            <BsFillTelephoneFill
              style={{
                padding: "1rem",
                borderRadius: "50%",
                backgroundColor: "black",
              }}
              size={20}
              color="white"
              className="icon"
            />
            <img
              src={images.curveArrow}
              alt="curved arrow"
              className="hero-arrow"
            />
          </Button>
        </motion.div>
      </HeroContent>

      <HeroImageContainer {...heroImageContainerVariants}>
        <HeroImage>
          <img
            src="https://as2.ftcdn.net/v2/jpg/09/25/50/83/1000_F_925508383_JNq0anb1JAm7EUYJ3ULbd2PPzZhrNVnF.jpg"
            alt="Imagen Representativa de la Agencia"
          />
        </HeroImage>
      </HeroImageContainer>

      </div>
    </HeroSection>
  );
};

export default Hero;
