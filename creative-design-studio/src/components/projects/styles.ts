import styled from "styled-components";

export const ProjectsSection = styled.section`
  margin-top: 10rem;
  width: 100%;
  padding: 5rem 0;
  height: 55rem;
  background-color: ${({ theme }) => theme.colors.bgBlack};

  @media (max-width: 960px) {
    height: auto;
  }
`;

export const Title = styled.h2`
  margin: 0 auto;
  font-size: 4.3rem;
  width: 60rem;
  font-family: "Krona One", sans-serif;
  color: ${({ theme }) => theme.colors.colorLimeClear};
  margin-bottom: 2rem;
  span {
    color: ${({ theme }) => theme.colors.bgGreen};
  }

  @media (max-width: 960px) {
    width: 30rem;
    font-size: 2rem;
    text-align: center;

    span {
      display: none;
    }
  }
`;

export const SliderContainer = styled.div`
  height: auto;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

export const CardsContainer = styled.div<{ activeIndex: number }>`
  display: flex;
  gap: 1rem;
  transition: transform 0.5s ease;
  transform: ${({ activeIndex }) => `translateX(-${(activeIndex * 100) / 4}%)`};
  width: calc(100% * ${2 / 3});

  @media (max-width: 960px) {
    width: calc(100% * ${2 / 1});
    transform: ${({ activeIndex }) =>
      `translateX(-${(activeIndex * 100) / 2}%)`};
  }

  @media (max-width: 768px) {
    width: calc(100% * ${2 / 1});
  }
`;

export const Card = styled.div`
  flex: 0 0 45%; /* Ancho menor para mostrar dos tarjetas completas */
  margin: 0;
  height: 475px;
  border: 5px solid ${({ theme }) => theme.colors.colorLimeClear};
  //filter: brightness(0.5);
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  transition: transform 0.5s;
  //filter: brightness(0.8);

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const CardContent = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.colorLimeClear};
  padding: 1rem;
  border-radius: 0 0 8px 8px;
  position: absolute;
  bottom: 0;

  .text-wrapper {
    display: flex;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.bgBlack};

    @media (max-width: 768px) {
      padding: 1rem;
      flex-direction: column;

      span {
        font-size: 3rem;
      }

      .text {
        h3 {
          font-size: 1.5rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }
  }
  h3 {
    margin: 0;
    font-size: 1.875rem;
  }
  p {
    font-size: 18px;
    margin: 0.5rem 0 0;
    width: 80%;
    font-family: "Inter", sans-serif;
  }

  span {
    font-size: 4rem;

    &:hover {
      color: ${({ theme }) => theme.colors.bgGreen};
      cursor: pointer;
    }
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 5rem;
`;

export const NavigationBar = styled.div`
  display: flex;
  width: 50rem;
  height: 0.2rem;
  background-color: #383838;
  border-radius: 5px;

  @media (max-width: 960px) {
    width: 40rem;
  }

  @media (max-width: 768px) {
    width: 30rem;
  }
`;

export const NavigationIndicator = styled.div<{ isActive: boolean }>`
  flex: 1;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.bgGreen : "transparent"};
  transition: background-color 0.3s;
  cursor: pointer;

  @media (max-width: 960px) {
    flex: 1;
  }
`;

export const NavButton = styled.button`
  background-color: ${({ theme }) => theme.colors.highlight};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;
