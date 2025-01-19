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
  align-items: center;
    justify-content: space-between;
  width: 35rem;
  height: 3rem;
  padding: 2rem;
  background-color: #ebeae4;

  h3 {
    font-size: 1.875rem;
  }

   .answer {
    display: none;
   }

    .arrow-icon {
        font-size: 2.5rem;

        &:hover {
            transform: rotate(180deg);
            cursor: pointer;
        }
    }
`;
