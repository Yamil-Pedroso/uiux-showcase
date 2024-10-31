import styled from "styled-components";

export const ContactFooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  background-color: ${({ theme }) => theme.colors.bgBlack};
`;

export const Content = styled.div`
  display: flex;
  padding: 5rem;
  width: 50vw;
  color: ${({ theme }) => theme.colors.colorLimeClear};
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;

  img {
    width: 14.5rem;
    height: 14.5rem;
    margin-top: 2rem;
    position: absolute;
    bottom: 4rem;
    right: 10rem;
    transform: rotate(130deg);
    animation: moveLeftRight 3s infinite;

    @keyframes moveLeftRight {
      0% {
        transform: rotate(125deg) translateY(0);
      }
      50% {
        transform: rotate(125deg) translateY(-2rem); 
      }
      100% {
        transform: rotate(125deg) translateY(0);
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  margin: 2rem 0;
  width: 30vw;

  span {
    color: ${({ theme }) => theme.colors.bgGreen};
  }
`;

export const Description = styled.p`
  color: #fff;
  font-size: 1.3125rem;
  font-weight: 300;
  font-family: "Inter", sans-serif;
  margin: 1rem 0;
  width: 28vw;
`;

export const Tel = styled.p`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 300;
  font-family: "Inter", sans-serif;
  margin: 1rem 0;
`;

export const Email = styled.p`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 300;
  font-family: "Inter", sans-serif;
  margin: 2rem 0;
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  gap: 1rem;

  .social-icon {
    padding: 1rem;
    border-radius: 50%;
    border: 3px solid #fff;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;

  p {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 300;
    font-family: "Inter", sans-serif;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
