import React from "react";
import {
  ServicesSection,
  ServicesHeader,
  CardsContainer,
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
  CardFooterIcon,
} from "./styles";
import { services, IServices } from "../../types/Types";
import { FaStarOfLife } from "react-icons/fa";

const Services: React.FC<IServices> = () => {
  return (
    <ServicesSection id="services">
      <ServicesHeader>
        <h2>
          We provide effective design solutions
          <span>
            <FaStarOfLife size={58} className="icon" />
          </span>
        </h2>
      </ServicesHeader>
      <CardsContainer>
        {services.map((service, index) => (
            <Card key={index}>
              <CardIcon>
                {typeof service.iconOne === "function"
                  ? React.createElement(service.iconOne)
                  : service.iconOne}
              </CardIcon>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>
                {service.description}
              </CardDescription>
              <CardFooterIcon>{
                typeof service.iconTwo === "function"
                  ? React.createElement(service.iconTwo)
                  : service.iconTwo
                }</CardFooterIcon>
            </Card>
         
        ))}
      </CardsContainer>
    </ServicesSection>
  );
};

export default Services;
