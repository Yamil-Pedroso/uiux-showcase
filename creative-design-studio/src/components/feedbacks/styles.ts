import styled from "styled-components";
import { motion } from "framer-motion";

export const FeedbacksSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0;
`;

export const Title = styled.div`
    h2 {
        font-size: 3.7rem;
        max-width: 48rem;
        text-align: center;
        span {
            color: ${({ theme }) => theme.colors.bgGreen};
        }

        @media (max-width: 960px) {
            margin: 0 auto;
            font-size: 3rem;
            span {
                display: none;
            }
        }

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

`;

export const CardsWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

    @media (max-width: 768px) {
        margin-top: 2.5rem;
    }
`;
