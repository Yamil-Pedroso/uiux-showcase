import styled from "styled-components";

export const FaqContainer = styled.div`
  margin: 5rem auto;

  h2 {
    margin: 0 auto;
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    width: 50rem;
  }
`;

export const FaqWrapper = styled.div``;

export const FaqCardWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

export const FaqCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid #000;
  padding: 1rem;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  h3 {
    font-size: 2rem;
    margin: 1rem 0;
  }
  p {
    font-size: 1.5rem;
  }
`;

export const FaqCardRight = styled.div`
  border: 3px solid #000;
  margin-left: 2rem;
  padding: 1rem;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  h3 {
    font-size: 2rem;
    margin: 1rem 0;
  }
  p {
    font-size: 1.5rem;
  }
`;

export const FaqCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 35rem;
  padding: 2rem 2rem;
  background-color: #ebeae4;
  margin: 1rem 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;

  h3 {
    font-size: 1.875rem;
    margin: 0;
  }

  .answer-wrapper {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease-in-out;
  }

  .answer-wrapper.active {
    max-height: 100rem;
  }

  .answer {
    font-size: 1.5rem;
    margin-top: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .answer-wrapper.active .answer {
    opacity: 1;
  }

  .arrow-icon {
    font-size: 2.5rem;
    cursor: pointer;
    align-self: flex-end;
    transform: rotate(0deg);
    transition: transform 0.3s ease;
  }

  .arrow-icon.rotated {
    transform: rotate(180deg);
  }
`;
