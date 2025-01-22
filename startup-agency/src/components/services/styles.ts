import styled from "styled-components";

export const ServicesContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  h2 {
    font-size: 5rem;
    font-weight: bold;
    width: 50rem;
    text-align: center;
  }

  .deco2 {
    position: absolute;
    top: 6rem;
    left: 10rem;
    width: 8rem;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .service-box {
    padding: 0 10rem;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #1b1b1b;
      color: #fff;

      .arrow-icon {
        color: #ff4613;
      }
    }
  }
 
`;

export const ServicesContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  padding: 1rem 0;
  gap: 10rem;
  transition: background-color 0.3s ease;

  .arrow-icon {
    display: flex;
    font-size: 3rem;
    cursor: pointer;
  }

`;

export const Content = styled.div`
 width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  h3 {
    font-size: 1.875rem;
    font-weight: bold;
  }

  .service-desc {
    display: flex;
    width: 36rem;
    p {
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.5;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
`;

// Planning Styles
export const PlanningContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  border-radius: .5rem;
  width: 80%;
  height: 50rem;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
  }
`;

export const IconPlayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1b1b;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    background-color: #1b1b1b;
  }

  .arrow-play-icon {
    font-size: 1.8rem;
    color: #ff4613;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 7rem; 
    height: 7rem;
    background-color: rgba(0, 0, 0, 0.4); 
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1); 
    animation: signalPulse 2.5s infinite;
    z-index: -1; 
  }

  &::after {
    animation-delay: 1.25s; 
  }

  @keyframes signalPulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(2); 
      opacity: 0;
    }
  }
`;