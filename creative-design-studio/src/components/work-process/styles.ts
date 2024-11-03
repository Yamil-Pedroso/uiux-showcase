import styled from "styled-components";
import { motion } from "framer-motion";

export const WorkProcessSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export const WorkingProcessContainer = styled.div`

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
         width: 55rem;
         position: relative;
     > p {
         margin: 1.5rem;
     }
     &:nth-child(1) {
        font-size: 3.7rem;

     }

    &:nth-child(2) {
        font-size: 1.3125rem;
        font-family: "Inter", sans-serif;
        width: 48rem;
    }

    &:nth-child(3) {
        font-size: 1.3125rem;
        font-family: "Inter", sans-serif;
        width: 48rem;

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
    padding: .5rem 1.5rem;
    border-radius: 1rem;
    border: 3px solid #000;
    margin-bottom: 1rem;
    transition: all 0.3s ease-in-out;
    p {
        font-size: 1.3125rem;
        font-family: "Inter", sans-serif;
    }
    `;
