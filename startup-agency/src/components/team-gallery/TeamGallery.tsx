import { TeamGalleryContainer, CardWrapper, Card } from "./styles";
import { teamGallery } from "../../types/Types";
import { motion } from "framer-motion";

interface TeamGalleryProps {
  id?: string;
}

const TeamGallery: React.FC<TeamGalleryProps> = ({ id }) => {
  return (
    <TeamGalleryContainer id={id}>
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
              as={motion.div}
              key={index}
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
              style={{
                marginTop: `${index % 2 !== 0 ? 5 : 0}rem`,
                transform: `translateX(${index * 25}rem) rotate(${
                  index % 2 === 0 ? 9 : -5
                }deg)`,
              }}
            >
              <Card
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                style={{}}
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
