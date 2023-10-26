import styled from "styled-components";
export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const StyledProject = styled.section`
    /* flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center; */
    width: 100%;
    padding: 0 18%;
    h2 {
        color: #ccd6f6;
        font-size: 40px;
        font-weight: 900;
    }

    p {
        width: 50%;
    }
`;

export const ProjectHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 50px;
`;

export const SliderContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    border-color: white;
    /* left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */
    /* position: absolute; */
`;

export const MacBook = styled.div`
    position: absolute;
    z-index: 10;
`;

export const Image2 = styled.img`
    z-index: 10;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
`;
