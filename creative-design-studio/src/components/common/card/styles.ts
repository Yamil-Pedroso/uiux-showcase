import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 1.25rem;
  @media (max-width: 768px) {
  }
`;

export const CardWrapper = styled.div`
  padding: 2rem;

  @media (max-width: 576px) {
      h3 {
         font-size: 1rem;
      }
   
      h4 {
         font-size: 0.875rem;
      }
  }
`;

export const Card = styled.div`
  width: 39rem;
  height: 25.25rem;
  border-radius: 1.25rem;
  border: 2px solid #000000;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0.3rem 0.3rem 1px #000000;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    height: auto;
    width: 80%;
  }

  @media (max-width: 576px) {
  }
`;

export const IconOne = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #000000;
`;

export const StarIconWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 576px) {
      .star-icon {
         width: 1.5rem;
      }
   }
`;

export const CardAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TextContent = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  h3 {
    font-size: 1.25rem;
    margin-left: 1rem;
  }

  h4 {
    font-size: 1rem;
    margin-left: 1rem;
    color: #404040;
  }


  @media (max-width: 576px) {
      flex-direction: column;
      > * {
          margin: 0rem;
        }
      h3 {
         font-size: 1rem;
      }
   
      h4 {
         font-size: 0.875rem;
          
      }
  }
`;

export const CardAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0; 
  
  @media (max-width: 576px) {
    width: 50px; 
    height: 50px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
