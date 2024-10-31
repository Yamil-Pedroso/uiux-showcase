import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 12vw;
  height: 49rem;
  background-color: ${({ theme }) => theme.colors.bgBlack};
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-top: -10rem;

  * {
    margin-bottom: 1rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 5.2rem;
  width: 50vw;
  color: ${({ theme }) => theme.colors.colorLimeClear};
  font-family: "Krona One", sans-serif;
  font-weight: 400;

   .icon {
     color: ${({ theme }) => theme.colors.bgGreen};
}
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.3125rem;
  font-family: "Inter", sans-serif;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.colorLimeClear};

`;

export const People = styled.div`
    display: flex;
    font-family: "Inter", sans-serif;
    padding: 1rem;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.colorLimeClear};
    gap: 1rem;
    position: relative;

    .content {
      .person-wrapper {
        width: 4rem;
        height: 4rem;
        border: 5px solid #000;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: .3rem;

        img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: inline-block;
        }
      }

    }

    p {
      margin-left: 12.8rem;
    }
  `;

export const HeroButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;

export const HeroImageContainer = styled.div`

`;

export const HeroImage = styled.div`
  width: 30rem;
  height: 33rem;
  border: 3px solid ${({ theme }) => theme.colors.colorLimeClear};
  border-radius: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
