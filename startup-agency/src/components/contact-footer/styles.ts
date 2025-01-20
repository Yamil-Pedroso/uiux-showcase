import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  padding: 5rem 0;
  gap: 3rem;
`;

export const Header = styled.div`
  width: 25.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  padding: 1rem;
  > * {
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const SpecialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  h3 {
    font-size: 1.3rem;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 0.5rem;
      font-size: 1.3rem;
      cursor: pointer;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  h3 {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    outline: none;
    border: 2px solid #4d4d4d;
    font-size: 15px;

    &::placeholder {
      color: #1b1b1b;
      font-weight: bold;
    }
  }

  .btn-form {
    width: 10rem;
    height: 3.125rem;
    background-color: ${({ theme }) => theme.colors.bgOrange};
    color: #fff;
    border-radius: 0.2rem;
    border: none;
    font-size: 0.9375rem;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.bgOrange};
    cursor: pointer;

    &:hover {
      border: 2px solid #1b1b1b;
      background-color: transparent;
      color: #1b1b1b;
    }
  }
`;

// Footer
export const FooterContainer = styled.div`
  color: #000;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48%;
  gap: 1rem;
  margin-bottom: -1rem;
`;

export const FooterLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.125rem;
    color: #1b1b1b;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
