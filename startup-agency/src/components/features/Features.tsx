import {
  FeaturesContainer,
  FeaturesWrapper,
  Text,
  Card,
  Content,
} from "./styles";
import { features } from "../../types/Types";

const Features = () => {
  return (
    <FeaturesContainer>
      <FeaturesWrapper>
        <Content>
          <h2>Features that set us apart from others</h2>
          <div className="card" style={{ display: "flex" }}>
            {features.map((item, idx) => {
              return (
                <Card>
                  <img key={idx} src={item.src} alt={item.alt} />

                  <Text>
                    <h2>{item.title}</h2>
                    <span>{item.description}</span>
                  </Text>
                </Card>
              );
            })}
          </div>
        </Content>
      </FeaturesWrapper>
    </FeaturesContainer>
  );
};

export default Features;
