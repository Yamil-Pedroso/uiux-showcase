import styled from "styled-components";

export const WorkProcessSection = styled.section`
  display: flex;
  align-items: center;
  margin: 0 auto;
   width: 79.5rem;
    padding: 100px 0;
    gap: 2rem;
`;

export const WorkingProcessContainer = styled.div`
    max-width: 732px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Title = styled.div`
     &:nth-child(1) {
        font-size: 3.7rem;
     }

    &:nth-child(2) {
        font-size: 1.3125rem;
        font-family: "Inter", sans-serif;
    }

    &:nth-child(3) {
        font-size: 1.3125rem;
        font-family: "Inter", sans-serif;
    }
`;

export const BrainStorming = styled.div`
    width: 463px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const BrainStormingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 1.3125rem;
        font-family: "Inter", sans-serif;
    }
`;
