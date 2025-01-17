import {
  ServicesContainer,
  ServicesWrapper,
  ServicesContent,
  Content,
} from "./styles";
import { services } from "../../types/Types";

const Services = () => {
  return (
    <ServicesContainer>
      <h2>Services to increase chances of success</h2>
      <ServicesWrapper>
        {/* Services */}
        {services.map((service, index) => (
          <ServicesContent key={index}>
            <Content>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Content>
            <div>
              {typeof service.icon === "function" && (
                <service.icon className="arrow-icon" />
              )}
            </div>
          </ServicesContent>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
