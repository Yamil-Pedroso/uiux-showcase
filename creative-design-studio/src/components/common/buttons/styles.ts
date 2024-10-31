import styled from 'styled-components';

export const Btn = styled.button`
   padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.bgGreen};
    border-radius: 3rem;
    border: 2px solid #000;
    box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.colorLimeClear};
    font-weight: bold;
    font-size: 1.5rem;
    transition: all 0.5s ease;

  &:hover {
    box-shadow: none;
  }
`;
