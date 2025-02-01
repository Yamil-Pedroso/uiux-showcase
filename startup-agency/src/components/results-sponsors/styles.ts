import styled from "styled-components";

export const ResultsSponsorsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center; /* Centra todo el contenido */
  background-color: ${({ theme }) => theme.colors.bgBlack2};
  width: 95%;
  height: 20.5rem;
  border-radius: 0.5rem;
  padding: 2rem;

  h2 {
    color: ${({ theme }) => theme.colors.bgLimeClear1};
    text-align: center;
    font-size: 2rem;
  }

  @media (max-width: 960px) {
    border-radius: none;
    width: 80%;
    height: 18rem;
    h2 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    width: 85%;
    height: 16rem;
    padding: 1.5rem;
    h2 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 700px) {

    padding: 1.5rem;
    h2 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 576px) {
    padding: 1rem;
    h2 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 420px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5rem;

  img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
  }

  span {
    color: ${({ theme }) => theme.colors.bgLimeClear1};
    margin-left: 1rem;
    font-size: 2rem;
    white-space: nowrap; /* Evita que el texto se desborde */
  }

  @media (max-width: 960px) {
    margin: 0 3rem;
    img {
      width: 3.8rem;
      height: 3.8rem;
    }
    span {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    margin: 0 2rem;
    img {
      width: 3.5rem;
      height: 3.5rem;
    }
    span {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 576px) {
    margin: 0 1.5rem;
    img {
      width: 3rem;
      height: 3rem;
    }
    span {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 420px) {
    margin: 0 1rem;
    img {
      width: 2.8rem;
      height: 2.8rem;
    }
    span {
      font-size: 1.2rem;
    }
  }
`;

export const ResultsSponsorsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  /* 📱 Responsividad */
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;
