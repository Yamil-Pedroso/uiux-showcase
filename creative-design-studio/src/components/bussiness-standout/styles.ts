import styled from 'styled-components';
import { motion } from 'framer-motion';

interface IOverlay {
  isActive: boolean
}

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
`;

 export const Overlay = styled.div<IOverlay>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
  display: ${({ isActive }: { isActive: boolean }) => (isActive ? "block" : "none")};
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  .video {
    width: 30rem;
    height: 26rem;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;
export const TextSection = styled.div`
`;

export const Title = styled.h2`
  width: 60rem;
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
  span {
    color: ${({ theme }) => theme.colors.bgGreen};
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
    content: '▶';
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
  `;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.5rem;
  margin-top: 4rem;
`;

export const Subtitle = styled.p`
  font-size: 1.3125rem;
  width: 26rem;
  font-family: "Inter", sans-serif;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryText};
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
`;

export const StatDescription = styled.p`
  font-size: 1.125rem;
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => theme.colors.colorLimeClear};
  margin: 0;
`;
