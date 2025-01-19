import styled from "styled-components";

export const FeedbacksContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgOrange};
  width: 95%;
  margin: 5rem auto;
`;
export const FeedbacksWrapper = styled.div`
  display: flex;
  padding: 8rem;
  position: relative;
  gap: 2rem;
  align-items: flex-start;
  height: auto; /* Deja que el contenido defina la altura */
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  > * {
    margin: 0rem;
  }
  h2 {
    font-size: 5rem;
  }

  p {
    width: 30rem;
    font-size: 1.3125rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bgWhite};
  border-radius: 10px;
  max-width: 50rem;
  position: sticky;
  top: 2rem; /* Fijo a 2rem del borde superior */
  align-self: flex-start; /* Alinea con la parte superior */
`;


export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bgWhite};
  border-radius: 10px;
  max-width: 50rem;
`;

export const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bgWhite};
  border-radius: 10px;
  width: 30rem;

  .comment {
    font-size: 1.3125rem;
    font-weight: bold;
  }
`;

export const Image = styled.div`
  width: 5rem;
  height: 5rem;
  border: 3px solid #1b1b1b;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AvatarContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;

  p {
    margin-left: 0.3rem;
    font-size: 1.3125rem;
  }
`;
