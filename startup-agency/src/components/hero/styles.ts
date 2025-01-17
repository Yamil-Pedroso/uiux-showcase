import styled from "styled-components";

export const HeroContainer = styled.div``;

export const BtnWrapper = styled.div`
  .btn-hero1 {
    background-color: #ff4613;
    color: #fff;
    border: none;
    padding: 1rem 2rem;
    margin-right: 1rem;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid #ff4613;
    &:hover {
      background-color: ${({ theme }) => theme.colors.bgLimeClear1};
      color: #ff4613;
      border: 2px solid #000;
    }
  }

  .btn-hero2 {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid #000;
    &:hover {
      background-color: ${({ theme }) => theme.colors.bgLimeClear1};
      color: #000;
      border: 2px solid #000;
    }
  }
`;
