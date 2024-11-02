import styled from "styled-components";

export const WorkProcessSection = styled.section`
  display: flex;
  justify-content: center;
    margin: 0 auto;
   width: 60rem;
    padding: 100px 0;
    gap: 8rem;
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
         width: 50rem;
     > p {
         margin: 1.5rem;
     }
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
  margin-top: 2rem;

`;

export const BrainStormingWrapper = styled.div`
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
