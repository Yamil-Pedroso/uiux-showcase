import styled from "styled-components";
import { motion } from "framer-motion";

export const TeamGalleryContainer = styled.div`
 // border: 2px solid #000;
  margin-top: -10rem;
  width: 59rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    width: 40rem;
  }

  @media (max-width: 768px) {
    height: 30rem;
    margin-left: 2rem;
  }

  @media (max-width: 700px) {
    height: 6rem;
  }
`;

export const CardWrapper = styled.div`
  position: absolute;
`;

export const Card = styled(motion.div)`
  width: 27.5625rem;
  height: 29rem;
  margin: 1rem;
  border-radius: 0.6rem;
  border: 10px solid ${({ theme }) => theme.colors.bgLimeClear1};
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 15rem;
    height: 16rem;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
