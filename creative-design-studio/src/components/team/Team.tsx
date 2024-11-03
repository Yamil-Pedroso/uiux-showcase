
import { TeamSection, AdBanner, BannerContent, TeamContainer, TeamCard } from "./styles";
import Marquee from "react-marquee-slider";
import { FaStarOfLife } from "react-icons/fa";
import { team } from "../../types/Types";
import { motion } from "framer-motion";
import { animationConfig, containerVariants, itemVariants } from "../../animations/variants";

const Team = () => {

  return (
    <TeamSection id="team">
      <AdBanner>
        <BannerContent>
          <Marquee
            velocity={150}
            direction="rtl"
            scatterRandomly={false}
            resetAfterTries={3}
            onInit={() => console.log("Marquee initialized")}
            onFinish={() => console.log("Marquee finished")}
          >
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <h1 key={index}>
                  Let's create a new experiences together!
                  <span>
                    <FaStarOfLife size={38} />
                  </span>
                </h1>
              ))}
          </Marquee>
        </BannerContent>
      </AdBanner>

      <TeamContainer>
        <h2>
          We have a team of creative people {" "}<span><FaStarOfLife size={58} className="icon"/></span>
        </h2>
      </TeamContainer>

     <motion.div
       variants={containerVariants}
       {...animationConfig}
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
          position: "relative",
        }}
     >
      {
        team.map((item) => (
          <>
            <TeamCard
              key={item.id}
              variants={itemVariants}
              name={item.name}
              position={item.position}
              avatar={item.avatar}
              socialNetworks={item.socialNetworks}
            />
          </>
        ))
      }
     </motion.div>
    </TeamSection>
  );
};

export default Team;
