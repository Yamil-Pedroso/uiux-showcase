import styled from "styled-components";

export const ServicesContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 5rem;
    font-weight: bold;
    width: 40%;
    text-align: center;
  }
`;
export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

export const ServicesContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  border-bottom: 1px solid #000;
  transition: background-color 0.3s ease;

  .arrow-icon {
    display: flex;
    font-size: 3rem;
    cursor: pointer;
  }

  &:hover {
    background-color: #1b1b1b;
    color: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;

  h3 {
    font-size: 1.875rem;
    font-weight: bold;
  }

  p {
    font-size: 1.125rem;
    font-weight: 400;
    width: 36rem;
    line-height: 1.5;
  }
`;
