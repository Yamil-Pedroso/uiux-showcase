import styled from "styled-components";

export const ResultsSponsorsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgBlack2};
  width: 95%;
  height: 20.5rem;
  border-radius: .5rem;

  h2 {
    color: ${({ theme }) => theme.colors.bgLimeClear1};
  }

  `;

export const Content = styled.div`
    display: flex;
    align-items: center;
     margin: 0 5rem;

    img {
      border-radius: 50%;
    }

   span {
     color: ${({ theme }) => theme.colors.bgLimeClear1};
     margin-left: 1rem;
     font-size: 2rem;
   }
`;

export const ResultsSponsorsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`;