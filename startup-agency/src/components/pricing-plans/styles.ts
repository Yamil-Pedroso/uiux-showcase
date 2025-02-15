import styled from "styled-components";

export const PricingPlansContainer = styled.div`
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

  .deco4 {
    position: absolute;
    top: 0rem;
    right: 8rem;
    width: 18rem;

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

export const PlansWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;

export const PlansCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 45rem;
  padding: 2rem;
  border: 3px solid #000;
  border-radius: 10px;

  transition: background-color 0.3s ease;

  img {
    width: 12rem;
    height: 12rem;
  }

  .title {
    font-size: 2rem;
    margin: -3rem 0;
    color: #1b1b1b;
  }

  .price {
    font-size: 4.375rem;
    font-weight: bold;
    color: #1b1b1b;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    margin-top: 2rem;

    li {
      display: flex;

      gap: 1rem;
      align-items: center;
      font-size: 1.5rem;
    }
  }

  .btn-plan {
    margin-top: 2rem;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    border: 3px solid #1b1b1b;
    border-radius: 5px;
    background-color: #f6f5ee;
    font-weight: bold;

    &:hover {
      background-color: ${(props) => props.theme.colors.bgOrange};
      color: #f6f5ee;
      border: 3px solid ${(props) => props.theme.colors.bgOrange};
    }
  }
`;

export const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: -2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
