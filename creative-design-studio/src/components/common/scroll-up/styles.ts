import styled from "styled-components";

export const ScrollUpWrapper = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #bff747;
  border-radius: 0.3rem;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.5s ease;

  .arrow-up {
    color: #000;
    font-size: 1.5rem;
    margin: 0;
    margin: 0;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
