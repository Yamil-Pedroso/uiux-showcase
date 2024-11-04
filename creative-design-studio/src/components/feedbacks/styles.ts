import styled from "styled-components";

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
    }

`;
