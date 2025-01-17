import styled from "styled-components";

export const TeamGalleryContainer = styled.div`
  display: flex;
    justify-content: center;
flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  
`;

export const Card = styled.div`
  width: 20rem;
  height: 22rem;
  margin: 1rem;
  border-radius: .6rem;
  border: 10px solid ${({ theme }) => theme.colors.bgLimeClear1};
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
