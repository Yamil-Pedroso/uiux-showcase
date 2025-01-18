import styled from "styled-components";

export const PricingPlansContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 5rem;
    font-weight: bold;
    width: 50%;
    text-align: center;
  }
`;

export const PlansWrapper = styled.div`
  display: flex;
  gap: 2rem;
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
  margin: 2rem 0;
  transition: background-color 0.3s ease;

  img {
    width: 10rem;
    height: 10rem;
  }

  h3 {
    font-size: 2rem;
    margin: 1rem 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    margin: 1rem 0;

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
            background-color: ${props => props.theme.colors.bgOrange};
            color: #f6f5ee;
            border: 3px solid ${props => props.theme.colors.bgOrange};
        }
    }
`;
