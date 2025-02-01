import {
  ResultsSponsorsContainer,
  ResultsSponsorsWrapper,
  Content,
} from "./styles";
import Marquee from "react-marquee-slider";
import { sponsorGallery } from "../../types/Types";

interface ResultsSponsorsProps {
  id?: string;
}

const ResultsSponsors: React.FC<ResultsSponsorsProps> = ({ id }) => {
  return (
    <ResultsSponsorsContainer id={id}>
      <ResultsSponsorsWrapper>
        <h2>
          We’ve helped over 200+ startups grow their business around the world
        </h2>
        <Marquee
          velocity={30}
          direction="rtl"
          scatterRandomly={false}
          resetAfterTries={3}
          onInit={() => console.log("Marquee initialized")}
          onFinish={() => console.log("Marquee finished")}
        >
          {sponsorGallery.map((item, idx) => {
            return (
              <Content key={idx}>
                <img key={idx} src={item.src} alt={item.alt} />

                <span>{item.title}</span>
              </Content>
            );
          })}
        </Marquee>
      </ResultsSponsorsWrapper>
    </ResultsSponsorsContainer>
  );
};

export default ResultsSponsors;
