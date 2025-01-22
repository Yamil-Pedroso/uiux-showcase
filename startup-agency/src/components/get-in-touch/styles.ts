import styled from "styled-components";

export const GetInTouchContainer = styled.div`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1b1b1b;
  width: 95%;
  position: relative;

  .deco5 {
    position: absolute;
    top: -3.5rem;
    right: 10rem;
    width: 8rem;
  }

  .deco6 {
    position: absolute;
    top: 18rem;
    left: 4rem;
    width: 23rem;
  }
`;

export const GetInTouchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.1rem;
  padding: 2rem 0 6rem 0;
  width: 50rem;
  height: 33rem;
  //border: 1px solid #fff;

  h2 {
    width: 100%;
    font-size: 5rem;
    color: #fff;
    text-align: center;
  }

  .btn-getintouch {
    width: 100%;
    height: 5rem;
    background-color: ${props => props.theme.colors.bgOrange};
    color: #fff;
    font-size: 1.6rem;
    font-weight: bold;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      border: 3px solid #fff;
      background-color: transparent;
      color: #fff;
    }
  }
`;
