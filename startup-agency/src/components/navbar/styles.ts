import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgBlack};
  color: ${({ theme }) => theme.colors.colorLimeClear};
  position: fixed;
  top: 0;
  z-index: 1;

  @media (max-width: 1450px) {
    width: 100%;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 15rem;

  h1 {
    color: ${({ theme }) => theme.colors.colorLimeClear};
  }

  @media (max-width: 768px) {
    padding: 0.8rem 5rem;
    width: 100%;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Li = styled.li`
  padding: 0.5rem;
`;

export const MyLink = styled.a`
  color: ${({ theme }) => theme.colors.colorLimeClear};
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  &:hover {
    color: #ff4613;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;

  .start-btn {
    background-color: #000;
    color: ${({ theme }) => theme.colors.colorLimeClear};
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
    @media (max-width: 550px) {
      display: none;
    }
  }

  .menu-icon {
    margin-left: 3rem;
    display: none;

    @media (max-width: 1000px) {
      display: block;
      cursor: pointer;
    }
  }
`;

export const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: 1400px) {
    background-color: ${({ theme }) => theme.colors.bgBlack};
    width: 22rem;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    color: ${({ theme }) => theme.colors.bgBlack};
    z-index: 2;

    h1 {
      color: ${({ theme }) => theme.colors.colorLimeClear};
      margin-left: 2rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;

      li {
        list-style: none;
      }

      a {
        color: ${({ theme }) => theme.colors.colorLimeClear};
        text-decoration: none;

        &:hover {
          color: #ff4613;
        }
      }
    }

    .close-icon {
      position: absolute;
      right: 1rem;
      top: 1rem;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.bgBlack};
    }
  }
`;
