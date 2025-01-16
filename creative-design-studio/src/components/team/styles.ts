import styled from "styled-components";
import CommonCard from "../common/card/CommonCard";

export const TeamSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
`;

export const AdBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.5rem;
  background-color: ${({ theme }) => theme.colors.bgBlack};
`;

export const BannerContent = styled.div`
  display: flex;

  h1 {
    color: ${({ theme }) => theme.colors.bgGreen};
    margin-right: 2rem;
    font-family: "Inter", sans-serif;
    font-size: 2.8rem;
    font-weight: 400;
    span {
      display: inline-block;
      line-height: 0;
      margin-left: 2rem;
      transform-origin: center center;
      position: relative;
      animation: rotating 6s linear infinite;

      @keyframes rotating {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;

  h2 {
    width: 45.5rem;
    font-size: 3.7rem;
    text-align: center;

    .icon {
      color: ${({ theme }) => theme.colors.bgGreen};
    }

    @media (max-width: 960px) {
      width: 100%;
      font-size: 3rem;

      .icon {
        display: none
      }
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
`;

export const TeamCard = styled(CommonCard)`
  position: relative;
  .container {
    padding: 2rem;
    gap: 1rem;
  }

  .card-content {
    width: 18.5rem;
    height: 18.375rem;
    border-radius: 1rem;
    border: 5px solid ${({ theme }) => theme.colors.bgBlack};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    overflow: hidden;
    background-color: #fff;

    @media (max-width: 768px) {
      width: 22rem;
      height: 22rem;
    }
  }
  .avatar {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  h3 {
    font-size: 1.8rem;
    color: black;
    text-align: center;
  }

  h4 {
    font-size: 1.4rem;
    font-family: "Inter", sans-serif;
    text-align: center;
    font-weight: 600;
  }

  .hover-name {
  position: absolute;
  font-size: 2rem;
  top: 13rem;
  color: black;
  background-color: ${({ theme }) => theme.colors.bgGreen};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  opacity: 0;
  transform: translateY(50%);
  transition: opacity 0.3s ease, transform 0.5s ease;
  cursor: pointer;  
  z-index: 1;

  .social {
    display: inline-block;
    margin-right: 0.5rem;

    &:hover {
      transform: scale(1.2);
    }
  }
}

&:hover .hover-name {
  animation: appearDownToUp 0.5s ease forwards;
  opacity: 1;
}

&:not(:hover) .hover-name {
  animation: disappearUpToDown 0.5s ease forwards;
  opacity: 0;
}

@keyframes appearDownToUp {
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes disappearUpToDown {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(50%);
    opacity: 0;
  }
}

`;
