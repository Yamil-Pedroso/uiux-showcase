import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  gap: 4rem;
  background-color: ${({ theme }) => theme.colors.bgBlack};
`;

export const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  font-size: 6.5rem;
  color: ${({ theme }) => theme.colors.colorLimeClear};
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.3125rem;
  color: ${({ theme }) => theme.colors.colorLimeClear};
`;

export const People = styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.colorLimeClear};
    gap: 1rem;
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

export const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
`;
