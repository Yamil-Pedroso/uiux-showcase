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
]

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroTitle>A creative <span>
          <FaStarOfLife size={58} className="icon"/>
          </span>design studio</HeroTitle>
        <HeroSubtitle>
          We're a creative design studio specializing in meeting the needs of
          the new generation. We offer innovative and cutting-edge design
          solutions to help our clients stand out in today's fast-paced.
        </HeroSubtitle>
        <People>
          <div className="content">
          {
            persons.map((person, index) => (
              <div className="person-wrapper"
                style={{  marginLeft: index === 1 ? '4rem' : index === 2 ? '8rem' : '0' }}
              >
                <img src={person.url} alt="Person" key={index} width="100" height="100" />
              </div>
            ))
          }
          </div>
          <p>
          Believed by more than a thousand people

          </p>
           </People>
           <div
              style={{
                display: "flex",
                position: "relative",
              }}
           >
            <div
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                position: "absolute",
                top: ".3rem",

              }}
            >
              <BsFillTelephoneFill color="white" size={24} />
            </div>
             <Button title="Book a free consultation" />
           </div>
      </HeroContent>

      <HeroImageContainer>
        <HeroImage>
          <img src="https://images.unsplash.com/photo-1716703373041-bd135107d947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagen Representativa de la Agencia"
        />

        </HeroImage>
      </HeroImageContainer>
    </HeroSection>
  );
};

export default Hero;
