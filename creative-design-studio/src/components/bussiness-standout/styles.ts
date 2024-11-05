import styled from "styled-components";
import { motion } from "framer-motion";

interface IOverlay {
  isActive: boolean;
}

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  width: 100%;
  position: relative;

  @media (max-width: 960px) {
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
  }
`;

export const Overlay = styled.div<IOverlay>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
  display: ${({ isActive }: { isActive: boolean }) =>
    isActive ? "block" : "none"};
`;

export const PlayVideo = styled(motion.div)`
  width: 50rem;
  height: auto;
  position: absolute;
  top: 20%;
  left: 30%;
  border: 5px solid #fff;
  overflow: hidden;
  z-index: 1;

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    color: #000;
    z-index: 2;
  }

  @media (max-width: 960px) {
    width: 90%;
    height: auto;
    top: 10%;
    left: 5%;
  }

  @media (max-width: 768px) {
    max-width: 80vw;
    max-height: auto;
  }

  .video {
    @media (max-width: 960px) {
      width: 100%;
      max-width: 100%;
      height: auto;
      object-fit: cover;
      
    }

  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 960px) {
    align-items: center;
  }

  @media (max-width: 768px) {
    .video {
      width: 20rem;
      height: 18rem;
    }
  }
`;
export const TextSection = styled.div``;

export const Title = styled.h2`
  width: 60rem;
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
  span {
    color: ${({ theme }) => theme.colors.bgGreen};

    @media (max-width: 960px) {
      display: none;
    }
  }

  @media (max-width: 960px) {
    width: 40rem;
    font-size: 3rem;
    text-align: center;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
  }
`;

export const SubtitleMobile = styled.p`
  display: none;

  @media (max-width: 960px) {
    display: block;
    text-align: center;
    font-size: 1.3125rem;
    font-family: "Inter", sans-serif;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const VideoContainer = styled(motion.div)`
  width: 51rem;
  height: 29rem;
  position: relative;
  border-radius: 1.2rem;
  border: 5px solid #000;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 960px) {
    width: 100%;
    height: auto;
  }
`;

export const VideoImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme }) => theme.colors.bgGreen};
  border: 2px solid #000;
  border-radius: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.colorLimeClear};
  transition: all 0.5s ease;

  &:hover {
    box-shadow: none;
  }

  &::before {
    content: "▶";
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }

  @media (max-width: 960px) {
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.5rem;
  margin-top: 4rem;

  @media (max-width: 960px) {
    margin-top: 2rem;
    gap: 4rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.3125rem;
  width: 26rem;
  font-family: "Inter", sans-serif;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryText};

  @media (max-width: 960px) {
    display: none;
  }
`;
export const StatsPanel = styled.div`
  width: 22rem;
  height: 25rem;
  padding: 1.8rem;
  background-color: ${({ theme }) => theme.colors.bgBlack};
  color: ${({ theme }) => theme.colors.panelText};
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 960px) {
    width: 41.5rem;
    max-width: 90%;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    width: 30rem;
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    width: 25rem;
  }

  @media (max-width: 480px) {
    width: 20rem;
  }

  @media (max-width: 400px) {
    width: 18rem;
  }

  @media (max-width: 350px) {
    width: 14rem;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const StatValue = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.bgGreen};
  margin: 0;

  @media (max-width: 960px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const StatDescription = styled.p`
  font-size: 1.125rem;
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => theme.colors.colorLimeClear};
  margin: 0;

  @media (max-width: 960px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
