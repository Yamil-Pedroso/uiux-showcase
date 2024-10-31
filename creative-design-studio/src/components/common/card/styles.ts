import styled from "styled-components";

export const CardContainer = styled.div`
   border-radius: 1.25rem;
`;

export const Card = styled.div`
    width: 39rem;
    height: 25.25rem;
    border-radius: 1.25rem;
    border: 2px solid #000000;
    transition: all .3s ease-in-out;

    &:hover {
       box-shadow: .3rem .3rem 1px  #000000;
    }
`;
