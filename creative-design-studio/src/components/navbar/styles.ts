import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgBlack};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  @media (max-width: 1450px) {
    width: 100%;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  @media (max-width: 1450px) {
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
  &:hover {
    color: #f1f1f1;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;

  .start-btn {
    padding: 1rem 2rem;
    @media (max-width: 600px) {
      display: none;
    }
  }

  .menu-icon {
    margin-left: 3rem;
    display: none;

    @media (max-width: 1450px) {
      display: block;
      cursor: pointer;
    }
  }
`;

export const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: 1400px) {
    background-color: ${({ theme }) => theme.colors.colorLimeClear};
    width: 22rem;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    color: ${({ theme }) => theme.colors.bgBlack};

    h1 {
      color: ${({ theme }) => theme.colors.bgBlack};
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
        color: ${({ theme }) => theme.colors.bgBlack};
        text-decoration: none;
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
