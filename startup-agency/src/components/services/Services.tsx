import {
  ServicesContainer,
  ServicesWrapper,
  ServicesContent,
  Content,
  IconWrapper,
} from "./styles";
import { services } from "../../types/Types";
import Planning from "./Planning";
import images from "../../assets/images";

interface ServicesProps {
  id?: string;
}

const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <ServicesContainer id={id}>
      <h2>Services to increase chances of success</h2>
      <ServicesWrapper>
        {/* Services */}
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <ServicesContent>
              <Content>
                <h3>{service.title}</h3>
                <div className="service-desc">
                  <p>{service.description}</p>
                </div>
              </Content>
              <IconWrapper>
                {typeof service.icon === "function" && (
                  <service.icon className="arrow-icon" />
                )}
              </IconWrapper>
            </ServicesContent>
          </div>
        ))}
      </ServicesWrapper>
      <img className="deco2" src={images.deco2} alt="services" />

      {/* Planning */}
      <Planning />

    </ServicesContainer>
  );
};

export default Services;
