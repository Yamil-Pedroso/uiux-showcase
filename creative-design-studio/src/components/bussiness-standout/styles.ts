import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
`;

export const TextSection = styled.div`
  
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  width: 25rem;
  color: ${({ theme }) => theme.colors.primaryText};
  span {
    color: ${({ theme }) => theme.colors.bgGreen};
  }
`;


export const VideoContainer = styled.div`
  position: relative;
  max-width: 600px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  `;

export const VideoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  `;

export const PlayButton = styled.button`
  position: absolute;
  bottom: 10%;
  left: 10%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
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

  gap: 2rem;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  width: 20rem;
`;
export const StatsPanel = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bgBlack};
  color: ${({ theme }) => theme.colors.panelText};
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatValue = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.bgGreen};
  margin: 0;
`;

export const StatDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.colorLimeClear};
  margin: 0;
`;
