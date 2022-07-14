import styled from "styled-components";

export const Container = styled.div`
    .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #FFFFFF;
    border-radius: 8px;
    margin: 1rem 0rem;
    padding: 0.5rem 1.5rem 0.5rem 0;

    img {
        width: 70px;
        height: 70px;
        object-fit: contain;
    }

    .description {
        font-weight: 400;
        font-size: 13px;
        max-width: 30%;
        color: #2C2C2C;
    }

    p:first-child {
        font-weight: 400;
        font-size: 7px;
    }

    span {
        font-size: 12px;
        margin: 0 0.5rem;
    }

    h3 {
        font-weight: 700;
        font-size: 14px;
        color: #000000;
        margin-left: 1.5rem;
    }

    .delete {
        position: absolute;
        right: -23px;
        top: -15px;
    }
}
`