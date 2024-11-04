import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 55rem;
  background-color: ${({ theme }) => theme.colors.bgBlack};

  @media (max-width: 1500px) {
   
    padding-bottom: 4rem;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 4rem;

  @media (max-width: 1500px) {
    padding: 0 10rem;
    margin-top: 4rem;
  }

  @media (max-width: 1400px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 0 3rem;
  }
`;

export const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 50rem;
  margin-top: -4rem;
  position: relative;

  @media (max-width: 1500px) {
   
  }

  @media (max-width: 1400px) {
    margin-top: 3rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  * {
    margin-bottom: 1rem;
  }

  .hero-arrow {
    position: absolute;
    bottom: 0;
    right: -3rem;
    width: 13rem;
    height: 13rem;
    transform: rotate(130deg);
    animation: moveLeftRight 3.5s infinite ease-in-out;

    @keyframes moveLeftRight {
      0% {
        transform: rotate(125deg) translateX(0);
      }
      50% {
        transform: rotate(125deg) translateX(1rem);
      }
      100% {
        transform: rotate(125deg) translateX(0);
      }
    }

    @media (max-width: 1500px) {
      width: 10rem;
      height: 10rem;
      right: -4rem;
    }

    @media (max-width: 1400px) {
      display: none;
    }
  }
`;

export const HeroBtnWrapper = styled(motion.div)`
  @media (max-width: 1400px) {
  }

  .hero-btn {
    display: flex;
    padding: 0 0.8rem 0rem 2rem;

    @media (max-width: 768px) {
      padding: -1rem 0.8rem 0rem 1rem;
      font-size: 1.2rem;
    }

    @media (max-width: 450px) {
      font-size: 1rem;
    }

    .icon {
      font-size: 1.8rem;
      margin-top: 1rem;
      margin-left: 2rem;

      @media (max-width: 768px) {
        margin-left: 1rem;
        font-size: 1rem;
      }

      @media (max-width: 450px) {
        font-size: 0.8rem;
      }
    }
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 5.2rem;
  width: 50vw;
  max-width: 50rem;
  color: ${({ theme }) => theme.colors.colorLimeClear};
  font-family: "Krona One", sans-serif;
  font-weight: 400;

  @media (max-width: 1500px) {
    font-size: 4.2rem;
  }

  @media (max-width: 1400px) {
    font-size: 3.2rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 450px) {
    font-size: 1.8rem;
  }

  .icon {
    color: ${({ theme }) => theme.colors.bgGreen};
    font-size: 3.6rem;

    @media (max-width: 1500px) {
      font-size: 3rem;
    }

    @media (max-width: 1400px) {
      display: none;
    }
  }
`;

export const HeroSubtitle = styled(motion.h2)`
  font-size: 1.3125rem;
  font-family: "Inter", sans-serif;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.colorLimeClear};

  @media (max-width: 1500px) {
    font-size: 1.125rem;
  }

  @media (max-width: 1400px) {
    width: 80%;
  }

  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

export const People = styled(motion.div)`
  display: flex;
  font-family: "Inter", sans-serif;
  padding: 1rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.colorLimeClear};
  gap: 1rem;
  position: relative;

  @media (max-width: 1400px) {
    flex-direction: column;
  }

  .content {
    .person-wrapper {
      width: 4rem;
      height: 4rem;
      border: 5px solid #000;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      top: 0.3rem;

      @media (max-width: 1400px) {
        left: 4rem;
        top: 1.4rem;
      }

      @media (max-width: 450px) {
        left: 2.5rem;
      }

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        display: inline-block;

        @media (max-width: 1500px) {
          object-fit: cover;
        }
      }
    }
  }

  p {
    margin-left: 12.8rem;

    @media (max-width: 1500px) {
      font-size: 1rem;
    }

    @media (max-width: 1400px) {
      margin: 5rem 0 0 0;
    }

    @media (max-width: 450px) {
      font-size: 0.8rem;
    }
  }
`;

export const HeroButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;

export const HeroImageContainer = styled(motion.div)`
  @media (max-width: 1500px) {
    width: 100%;
  }
`;

export const HeroImage = styled.div`
  width: 30rem;
  height: 33rem;
  border: 5px solid ${({ theme }) => theme.colors.colorLimeClear};
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1500px) {
    margin: 0 auto;
    width: 25rem;
    height: auto;
    min-width: 90%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.bgBlack};
`;
