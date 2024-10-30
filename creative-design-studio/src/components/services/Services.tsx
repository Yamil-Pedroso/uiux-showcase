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



const Services: React.FC<IServices> = () => {
  return (
    <ServicesSection>
      <ServicesHeader>Nuestros Servicios</ServicesHeader>
      <CardsContainer>
        {services.map((service, index) => (
          <Card key={index}>
            <CardIcon>{service.iconOne}</CardIcon>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>
              Descripción breve del servicio proporcionado.
            </CardDescription>
            <CardFooterIcon>
              {service.iconTwo}
            </CardFooterIcon>
          </Card>
        ))}
      </CardsContainer>
    </ServicesSection>
  );
};

export default Services;
