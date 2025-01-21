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
`;

export const LeftSide = styled.div`
  width: 45rem;
  margin-top: 2rem;
`;

export const CardWrapper = styled.div`
  position: relative;
`;

export const Card = styled.div`
  width: 31.25rem;
  height: 32.8125rem;
  display: flex;
  flex-direction: column;
  border: 10px solid ${({ theme }) => theme.colors.bgLimeClear1};
  border-radius: 0.5rem;
  overflow: hidden;
  position: absolute;
  top: -6rem;
  left: 5rem;
  transform: rotate(-12deg);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.8) contrast(1.2);
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
  }
`;

export const Content = styled.div`
   > * {
        margin-bottom: 0;
   }

   p {
      width: 45rem;
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
        margin-top: 2rem;
    }

    p {
        font-size: 1.3125rem;
        white-space: nowrap;
    }
`;
