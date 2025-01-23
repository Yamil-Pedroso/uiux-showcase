import styled from "styled-components";

export const FeaturesContainer = styled.div`
   position: relative;

  .deco3 {
    position: absolute;
    bottom: -18rem;
    right: 5rem;
    width: 22rem;
    transform: rotate(70deg) translateY(10rem);
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
`;

export const Content = styled.div`
  display: flex;
    justify-content: center;
    flex-direction: column;
    
  h2 {
    width: 50rem;
    font-size: 5rem;
    color: #000;
    margin-bottom: 2rem;
    text-align: left;
  }

  .card-wrapper {
    
  }
`;

export const FeaturesWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 25.4rem;
  height: 25.18rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 3px solid #1b1b1b;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 1rem;

  img {
    width: 15rem;
    height: 15rem;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.875rem;
    color: #000;
  }
  span {
    color: #000;
    font-size: 1.125rem;
    line-height: 1.7rem;
    margin-top: -1rem;
  }
`;
