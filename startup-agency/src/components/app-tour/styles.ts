import styled from "styled-components";

interface IAppTourProps {
  top: number;
  left: number;
}

export const AppTourContainer = styled.div`
  border: 4px solid #000;
`;

export const AppTourTooltip = styled.div`
  img {
    width: 8rem;
    position: absolute;
    top: 13rem;
    left: -5rem;
    animation: floating 2s ease-in-out infinite alternate;

    @keyframes floating {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(0.5rem);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;

export const AppTourWrapper = styled.div<IAppTourProps>`
  border: 3px solid #000;
  justify-content: space-between;
  padding: .5rem 2rem;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  width: 10rem;
  height: auto;
  transform: translate(50%, 100%);
  text-align: center;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  z-index: 1000;

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const AppTourBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AppTourButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0.5rem 1rem;
  cursor: pointer;

    .arrow-right {
        color: #ffb847;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.4);
        }
    }
`;
