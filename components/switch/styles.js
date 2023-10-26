import styled from "styled-components";

const QUERIES = {
    large: `min-width: 1200px`,
    medium: `min-width: 870px`,
    small: `min-width: 660px`,
    maxWidth: `1500px`
};
export const Spread = styled.div`
    position: absolute;
    display: block;
    top: 20px;
    z-index: -5;
    background-color: ${({ theme }) => theme.main};
    width: 400vmax;
    height: 400vmax;
    top: calc(-250vmax + 3rem);
    right: calc(-250vmax + 3rem);
    border-radius: 100%;
`;

export const SwitchBtn = styled.button`
    position: relative;
    z-index: 1;
    margin-top: -10px;
    transform: scale(0.7);
    display: flex;
    box-shadow: ${({ theme }) => theme.shadow};
    background-color: ${({ theme }) => theme.switchBg};
    width: 40px;
    height: 40px;
    border-radius: 100px;
    transition: transform 0.2s ease-in-out;
    justify-content: center;
    align-items: center;

    :hover {
        cursor: pointer;
    }
    @media (${QUERIES.large}) {
        transform: scale(1);
        margin-top: 0px;
    }
`;
