import styled from "styled-components";

export const FeaturesContainer = styled.div`
`;

export const Content = styled.div`
  display: flex;
    justify-content: center;
    flex-direction: column;
  h2 {
    width: 60rem;
    font-size: 5rem;
    color: #000;
    margin-bottom: 2rem;
    text-align: left;
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
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #000;
  border-radius: 0.5rem;
  overflow: hidden;

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
