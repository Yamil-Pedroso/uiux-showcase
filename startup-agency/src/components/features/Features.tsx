import {
  FeaturesContainer,
  FeaturesWrapper,
  Text,
  Card,
  Content,
} from "./styles";
import { features } from "../../types/Types";
import { motion } from "framer-motion";
import images from "../../assets/images";

interface FeaturesProps {
  id?: string;
}

const Features: React.FC<FeaturesProps> = ({ id }) => {
  return (
    <FeaturesContainer id={id}>
      <FeaturesWrapper>
        <Content>
          <h2>Features that set us apart from others</h2>
          <motion.div
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
            className="card-wrapper"
            style={{ display: "flex" }}
          >
            {features.map((item, idx) => {
              return (
                <Card
                  as={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <img key={idx} src={item.src} alt={item.alt} />

                  <Text>
                    <h2>{item.title}</h2>
                    <span>{item.description}</span>
                  </Text>
                </Card>
              );
            })}
          </motion.div>
        </Content>
      </FeaturesWrapper>

      <img className="deco3" src={images.deco3} alt="features" />
    </FeaturesContainer>
  );
};

export default Features;
