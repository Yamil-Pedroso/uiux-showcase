import styled from 'styled-components';

export const HeroContainer = styled.div`
    margin: 12rem auto;
    width: 80rem;
    position: relative;
    padding: 0 2rem;

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
    }

    .deco2 {
        position: absolute;
        top: -5rem;
        right: -6rem;
        width: 8rem;
        animation: floating 2s ease-in-out infinite alternate;
    }

    @media (max-width: 960px) {
        width: 90%;
        h2 {
            font-size: 6rem;
        }
        h3 {
            font-size: 1.2rem;
        }
        .deco1 {
            display: none;
        }
        .deco2 {
            display: none;
        }
    }

    @media (max-width: 768px) {
        margin: 8rem auto;
        h2 {
            font-size: 4.5rem;
        }
        h3 {
            font-size: 1.1rem;
        }
        .deco1 {
            left: -6rem;
            width: 18rem;
        }
        .deco2 {
            right: -3rem;
            width: 6rem;
        }
    }

    @media (max-width: 576px) {
        margin: 8rem auto;
        text-align: center;
        h2 {
            font-size: 3.5rem;
        }
        h3 {
            font-size: 1rem;
        }
        .deco1 {
            display: none;
        }
        .deco2 {
            right: -2rem;
            width: 5rem;
        }
    }

    @media (max-width: 420px) {
        margin: 8rem auto;
        padding: 0 1rem;
        h2 {
            font-size: 2.5rem;
        }
        h3 {
            font-size: 0.9rem;
        }
        .deco2 {
            display: none;
        }
    }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Permite que los botones se acomoden en pantallas pequeñas */
  margin-top: 4rem;
  gap: 1rem;

  .btn-hero1 {
    background-color: #ff4613;
    color: #fff;
    border: 2px solid #ff4613;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.bgLimeClear1};
      color: #ff4613;
      border: 2px solid #000;
    }
  }

  .btn-hero2 {
    background-color: #000;
    color: #fff;
    border: 2px solid #000;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.bgLimeClear1};
      color: #000;
      border: 2px solid #000;
    }
  }

  /* 📱💻 Responsividad */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
   

    .btn-hero1,
    .btn-hero2 {
      width: 90%;
      text-align: center;
      font-size: 1rem;
      padding: 1rem;
    }
  }

  @media (max-width: 576px) {
    .btn-hero1,
    .btn-hero2 {
      font-size: 0.9rem;
      padding: 0.8rem;
      width: 100%;
    }
  }

  @media (max-width: 420px) {
    .btn-hero1,
    .btn-hero2 {
      font-size: 0.85rem;
      padding: 0.7rem;
    }
  }
`;
