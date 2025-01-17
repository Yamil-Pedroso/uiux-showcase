import { TeamGalleryContainer, CardWrapper, Card } from "./styles";
import { teamGallery } from "../../types/Types";

const TeamGallery = () => {
  return (
    <TeamGalleryContainer>
      {teamGallery.map((item, index) => {
        return (
          <CardWrapper>
            <Card key={index}>
              <img src={item.src} alt={item.alt} />
            </Card>
          </CardWrapper>
        );
      })}
    </TeamGalleryContainer>
  );
};

export default TeamGallery;
