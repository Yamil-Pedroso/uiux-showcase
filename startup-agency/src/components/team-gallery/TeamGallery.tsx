import { TeamGalleryContainer, CardWrapper, Card } from "./styles";
import { teamGallery } from "../../types/Types";

const TeamGallery = () => {
  return (
    <TeamGalleryContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "59rem",
          height: "55rem",
        }}
      >
        {teamGallery.map((item, index) => {
          return (
            <CardWrapper
              style={{
                marginTop: `${index % 2 !== 0 ? 5 : 0}rem`,
              }}
            >
              <Card
                key={index}
                style={{
                  transform: `translateX(${index * 25}rem) rotate(${
                    index % 2 === 0 ? 9 : -5
                  }deg)`,
                }}
              >
                <img src={item.src} alt={item.alt} />
              </Card>
            </CardWrapper>
          );
        })}
      </div>
    </TeamGalleryContainer>
  );
};

export default TeamGallery;
