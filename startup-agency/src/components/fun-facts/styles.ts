import styled from "styled-components";

export const FunFactsContainer = styled.div`
  width: 95%;
  height: 44rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.bgOrange};
  margin-top: 10rem;
`;
export const FunFactsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5.5rem;
`;

export const LeftSide = styled.div``;

export const CardWrapper = styled.div``;

export const Card = styled.div`
  width: 25.4rem;
  height: 25.18rem;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 8px solid ${({ theme }) => theme.colors.bgLimeClear1};
  border-radius: 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const RightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  width: 45rem;
`;

export const RightSideContent = styled.div``;

export const ResultContentWrapper = styled.div`
   

  .title {
    font-size: 5rem;
  }

  .desc {
    font-size: 1.3125rem;
    line-height: 2rem;
    margin-top: 1rem;
  }
`;

export const Result = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ResultContent = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > * {
        margin: 0;
    }

    h2 {
        font-size: 5rem;
       
    }

    p {
        font-size: 1.3125rem;
        white-space: nowrap;
    }
`;
