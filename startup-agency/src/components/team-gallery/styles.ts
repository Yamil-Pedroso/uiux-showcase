import styled from "styled-components";
import { motion } from "framer-motion";

export const TeamGalleryContainer = styled.div`
 // border: 2px solid #000;
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
