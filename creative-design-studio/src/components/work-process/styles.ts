import styled from "styled-components";
import { motion } from "framer-motion";

export const WorkProcessSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const WorkingProcessContainer = styled.div`
  @media (max-width: 960px) {
    width: 40rem;
  }
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;

  h3 {
    font-size: 1.3125rem;
  }
`;

export const Title = styled.div`
  width: 60rem;
  position: relative;

  @media (max-width: 960px) {
    width: 30rem;
    text-align: center;
    margin: 0 auto;
  }
  > p {
    margin: 1.5rem;

    @media (max-width: 960px) {
        margin: 1rem;
        width: 100%;
      .star-icon {
        display: none;
      }
    }
  }
  &:nth-child(1) {
    font-size: 3.7rem;

    @media (max-width: 960px) {
      font-size: 2rem;
    }

    @media (max-width: 768px) {
    }
  }

  &:nth-child(2) {
    font-size: 1.3125rem;
    font-family: "Inter", sans-serif;
    width: 48rem;

    @media (max-width: 960px) {
      width: 35rem;
    }
  }

  &:nth-child(3) {
    font-size: 1.3125rem;
    font-family: "Inter", sans-serif;
    width: 48rem;

    @media (max-width: 960px) {
      width: 35rem;
    }
  }
`;

export const BrainStorming = styled(motion.div)`
  margin-top: 2rem;
`;

export const BrainStormingWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  border: 3px solid #000;
  margin-bottom: 1rem;
  transition: all 0.3s ease-in-out;

    @media (max-width: 960px) {
        width: 80%;
        margin: 1rem auto;
    }
  p {
    font-size: 1.3125rem;
    font-family: "Inter", sans-serif;
  }
`;
