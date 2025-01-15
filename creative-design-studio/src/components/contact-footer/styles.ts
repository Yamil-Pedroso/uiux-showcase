
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
  width: 90rem;
  padding: 5rem;
  color: ${({ theme }) => theme.colors.colorLimeClear};
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  img {
    width: 14.5rem;
    height: 14.5rem;
    margin-top: 22rem;
    margin-left: 30rem;
    position: absolute;

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
  font-size: 3.6rem;
  font-weight: 400;
  margin: 2rem 0;

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
  width: 28rem;
`;

export const Tel = styled.p`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 300;
  font-family: "Inter", sans-serif;
  margin: 1rem 0;

   span:first-child {
    color: ${({ theme }) => theme.colors.bgGreen};
  }
`;

export const Email = styled.p`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 300;
  font-family: "Inter", sans-serif;
  margin: 2rem 0;

  span:first-child {
    color: ${({ theme }) => theme.colors.bgGreen};
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  gap: 1rem;

  .social-icon {
    padding: 1rem;
    border: 3px solid #fff;
    border-top-right-radius: 2rem;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
      color: #000;
      background-color: ${({ theme }) => theme.colors.bgGreen};
      border: 3px solid #000;
      box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.colorLimeClear};
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;

  .btn {
    display: flex;
    justify-content: space-between;
    padding: .3rem 0rem;
    
    span {
      padding: .5rem 2rem;
    }

    .cir-arrow-icon {
      font-size: 3rem;
      padding: .5rem;
      cursor: pointer;  
    }
  }

  p {
    color: ${({ theme }) => theme.colors.colorLimeClear};
    font-size: 1.6rem;
    font-weight: 300;
    font-family: "Inter", sans-serif;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      width: 30rem;
      padding: 1rem;
      font-size: 1rem;
      border: 1px solid ${({ theme }) => theme.colors.colorLimeClear};
      border-radius: 3rem;
      background-color: #000;
      color: #fff;
      outline: none;

      &::placeholder {
        color: ${({ theme }) => theme.colors.colorLimeClear};
      }
    }

    textarea {
      min-width: 30rem;
      max-width: 30rem;
      max-height: 10rem;
      min-height: 6rem;
      padding: 1rem;
      font-size: 1rem;
      color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.colorLimeClear};
      background-color: #000;
      border-radius: 2rem;
      outline: none;

      &::placeholder {
        color: ${({ theme }) => theme.colors.colorLimeClear};
      }
    }
  }
`;

export const MyFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.bgBlack};
`;

export const FooterWrapper = styled.div`
  max-width: 85rem;
  padding: 1.5rem;
  border-top: 1px solid gray;
  margin: 0 auto;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftFooterSide = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.colorLimeClear};
    font-size: 2rem;
    font-weight: 300;
  }
`;

export const RightFooterSide = styled.div`
  p {
    color: ${({ theme }) => theme.colors.colorLimeClear};
    font-size: 1rem;
    font-weight: 300;
    opacity: 0.5;
  }
`;