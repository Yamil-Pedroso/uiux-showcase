import styled from "styled-components";
import { motion } from "framer-motion";

export const ServicesSection = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ServicesHeader = styled.div`
  width: 70rem;
  max-width: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 2rem;
  margin: 0 auto;
  h2 {
    text-align: center;
    font-size: 4rem;
  }
  span {
    margin-left: 1rem;

    .icon {
      color: ${({ theme }) => theme.colors.bgGreen};
    }
  }
`;

export const CardsContainer = styled(motion.div)`
  width: 90%;
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem
`;

export const Card = styled(motion.div)`
  width: 35rem;
  height: 18rem;
  padding: 2rem;
  border-radius: 1rem;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgGreen};
    box-shadow: .3rem .3rem 1px  #000000;
  }
`;

export const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.875rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #2e2e2e;
`;

export const CardDescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1rem;
  font-family: "Inter", sans-serif;
  color: #313131;
`;

export const CardFooterIcon = styled.div`
  font-size: 1.5rem;
`;
