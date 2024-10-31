import { TeamSection, AdBanner, BannerContent, TeamContainer, TeamCard } from "./styles";
import Marquee from "react-marquee-slider";
import { FaStarOfLife } from "react-icons/fa";
import { team } from "../../types/Types";

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
          We have a team of creative people <span><FaStarOfLife size={48} className="icon"/></span>
        </h2>
      </TeamContainer>

     <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
     >
      {
        team.map((item) => (
          <TeamCard
            key={item.id}
            name={item.name}
            position={item.position}
            avatar={item.avatar}
          />
        ))
      }

     </div>
    </TeamSection>
  );
};

export default Team;
