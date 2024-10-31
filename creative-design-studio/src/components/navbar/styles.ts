import styled from 'styled-components';

export const Header = styled.header`
    background-color: ${({ theme }) => theme.colors.bgBlack};
    color: white;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 100;
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
     align-items: center;
    padding: 0.8rem 15vw;
    width: 100%;

    h1 {
        color: ${({ theme }) => theme.colors.colorLimeClear};
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Li = styled.li`
    padding: 0.5rem;
`;

export const MyLink = styled.a`
    color: ${({ theme }) => theme.colors.colorLimeClear};
    text-decoration: none;
    font-family: "Inter", sans-serif;
    &:hover {
        color: #f1f1f1;
    }
`;
