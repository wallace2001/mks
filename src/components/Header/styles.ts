import styled from "styled-components";

export const Container = styled.header`

    width: 100%;
    height: 101px;
    padding: 0 3rem;

    background-color: var(--blue);

    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
        display: flex;
        align-items: center;

        h4 {
            margin-left: 1rem;
            font-size: 40px;
            font-weight: 600;
            color: #FFFFFF;
        }

        span {
            font-size: 20px;
            font-weight: 300;
            color: #FFFFFF;
            margin-left: 0.5rem;
            margin-top: 0.6rem;        
        }
    }
`