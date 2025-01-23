import styled from "styled-components";

export const HeroContainer = styled.div`
    margin: 12rem auto;
    width: 80rem;
    position: relative;

    > * {
        margin: 2rem 0;
    }

    h2 {
        font-size: 7.25rem;
        font-weight: bold;
        text-align: center;
    }

    h3 {
        font-size: 1.3125rem;
        font-weight: 400;
        text-align: center;
        margin: 2rem 0;
    }

    .deco1 {
        position: absolute;
        top: 12rem;
        left: -12rem;
        width: 25rem;

        animation: moveLeftRight 3s ease-in-out infinite alternate;

        @keyframes moveLeftRight {
            0% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(-2rem);
            }
            100% {
                transform: translateX(0);
            }
          }
    }

    .deco2 {
        position: absolute;
        top: -5rem;
        right: -6rem;
        width: 8rem;
        animation: floating 2s ease-in-out infinite alternate;

    @keyframes floating {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(0.5rem);
      }
      100% {
        transform: translateY(0);
      }
    }
    }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  gap: 1rem;

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
