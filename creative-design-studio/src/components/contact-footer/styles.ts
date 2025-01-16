import styled from "styled-components";

const breakpoints = {
  xll: "1500px", // Pantallas extragrandes
  xl: "1200px", // Pantallas grandes
  lg: "960px", // Pantallas medianas
  md: "768px", // Tablets
  sm: "576px", // Teléfonos grandes
  xs: "425px", // Teléfonos pequeños
};

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

  @media (max-width: ${breakpoints.xl}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${breakpoints.lg}) {
    margin-top: -4rem;
  }

`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;

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

    @media (max-width: 1500px) {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 400;
  margin: 2rem 0;

  span {
    color: ${({ theme }) => theme.colors.bgGreen};
  }

  @media (max-width: 960px) {
    font-size: 3rem;
    span {
      display: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 576px) {
    width: 22rem;
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-size: 1.3125rem;
  font-weight: 300;
  font-family: "Inter", sans-serif;
  margin: 1rem 0;
  width: 28rem;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 576px) {
    width: 20rem;
    font-size: 1rem;
  }
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

  @media (max-width: 576px) {
    span {
      font-size: 1.2rem;
    }
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

  @media (max-width: 576px) {
    span {
      font-size: 1.2rem;
    }
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

    @media (max-width: 576px) {
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
  }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0rem;

    span {
      padding: 0.5rem 2rem;
    }

    .cir-arrow-icon {
      font-size: 3rem;
      padding: 0.5rem;
      cursor: pointer;
    }

    @media (max-width: 1200px) {
      width: 100%;
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
      transition: all 0.5s ease;

      &::placeholder {
        color: ${({ theme }) => theme.colors.colorLimeClear};
      }

      @media (max-width: 576px) {
        width: 22rem;
      }
    }

    textarea {
      width: 30rem; 
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
      transition: all 0.5s ease;

      &::placeholder {
        color: ${({ theme }) => theme.colors.colorLimeClear};
      }

      @media (max-width: 576px) {
        width: 22rem; 
        max-width: 100%; 
      }
    }

    @media (max-width: 1200px) {
      justify-content: center;
      align-items: center;
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
  
  @media (max-width: ${breakpoints.lg}) {
     padding: 1rem;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 0.5rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.xl}) {
    flex-direction: column;
    text-align: center;
  }
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
