import { Box } from "@chakra-ui/react";
import styled from "styled-components";


export const Container = styled(Box)`

    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

    img {
        width: 111px;
        height: 138px;
        object-fit: contain;
    }

    .name_price {
        div {
            width: auto;
            background: #373737;
            border-radius: 10px;
            padding: 0.5rem;

            p {
                font-size: 13px;
                font-weight: 700;
                color: #FFFFFF;
            }
        }
        .name {
            flex: 1;
            font-size: 16px;
            font-weight: 400;
            max-width: 70%;
            color: #2C2C2C;
        }
    }

    .description {
        align-self: flex-start;
        padding: 0 0.5rem;
        font-weight: 300;
        color: #2C2C2C;
        font-size: 10px;
    }

    .bagImg {
        width: 12px;
        height: 13.5px;
    }

    .textButton {
        font-size: 15px;
        font-weight: 700;
        color: #FFFFFF;
        margin-left: 10px;
    }
`