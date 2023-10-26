import styled from "styled-components";
export const StyledProjects = styled.section`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        margin-top: 0px;
        color: #ccd6f6;
        font-size: 40px;
        margin-bottom: 50px;
        text-align: start;
    }

    h3 {
        color: #ccd6f6;
        font-size: 30px;
    }

    p {
        margin-right: 11px;
        width: 350px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 30px;
`;

// const InputWrapper = styled.div<{
//   borderColor?: string;
//   disabled?: boolean;
//   statusColor?: Status;
// }>(({ borderColor, disabled }) => ({
//   backgroundColor: "white",
//   width: "40%",
//   maxWidth: "600px",
//   position: "relative",
//   display: "flex",
//   borderRadius: "5px",
//   height: "20px",
//   padding: "14px 16px",
//   marginTop: "8px",
//   boxSizing: "content-box",
//   boxShadow: "0 0px 10px 0 rgba(0, 0, 0, 0.25);",
//   ["&:focus"]: {
//     border: "1px solid #348DF7",
//   },
// }));

// export const Wrapper =
//     styled.div <
//     {} >
//     (({}) => ({
//         backgroundColor: projectsData.backgroundColor,
//         width: "100%",
//         height: "450px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center"
//     }));

export const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledIcons = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    padding: 0 10px 0 10px;

    li {
        display: flex;

        a {
            padding: 0px;

            svg {
                width: 23px;
                height: 23px;
                color: #a8b2d1;
                margin-left: 10px;

                &:hover,
                &:focus {
                    color: #06d640;
                }
            }
        }
    }
`;

export const StyledPic = styled.div`
    position: relative;
    width: 85%;

    .img {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 5px;
        z-index: 6;
    }

    .wrapper {
        position: relative;
        justify-content: center;
        align-items: center;
        display: flex;
        width: 90%;
        border-radius: 5px;
    }
`;

export const ProjectHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;
