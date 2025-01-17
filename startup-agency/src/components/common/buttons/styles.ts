import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Btn = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;

  &:hover {
    box-shadow: none;
  }
`;
