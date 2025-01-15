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
  Text,
} from "./styles";
import { services, IServices } from "../../types/Types";
import { FaStarOfLife } from "react-icons/fa";
import {
  containerVariants,
  animationConfig,
  itemVariants,
} from "../../animations/variants";

const Services: React.FC<IServices> = () => {
  return (
    <ServicesSection id="services">
      <ServicesHeader>
        <h2>
          We provide effective design solutions
          <span>
            <FaStarOfLife className="icon" />
          </span>
        </h2>
      </ServicesHeader>
      <CardsContainer variants={containerVariants} {...animationConfig}>
        {services.map((service, index) => (
          <Card variants={itemVariants} key={index}>
            <CardIcon>
              {
                typeof service.iconOne === "string" ? (
                  <img src={service.iconOne} alt="icon" />
                ) : (
                  typeof service.iconOne === "function" ? React.createElement(service.iconOne) : null
                )
              }
            </CardIcon>
            <Text>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </Text>
            <CardFooterIcon>
              <img src={service.iconTwo} alt="icon"/>
            </CardFooterIcon>
          </Card>
        ))}
      </CardsContainer>
    </ServicesSection>
  );
};

export default Services;
