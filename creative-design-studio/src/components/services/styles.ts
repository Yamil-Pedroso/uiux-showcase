import styled from 'styled-components';

export const ServicesSection = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

export const ServicesHeader = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 2rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(25% - 1rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.iconColor};
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.cardTitle};
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.cardText};
  margin-bottom: 1rem;
  text-align: center;
`;

export const CardFooterIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.footerIconColor};
`;
