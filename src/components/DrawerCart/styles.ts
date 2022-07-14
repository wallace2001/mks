import { DrawerContent } from '@chakra-ui/react';
import styled from 'styled-components';


export const Container = styled(DrawerContent)`
    
    .drawer-header {
        span {
            max-width: 15rem;
            padding-top: 1.5rem;
            font-size: 27px;
            font-weight: 700;
            color: #FFFFFF;
        }

        .box-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background: #000000;

            :hover {
                cursor: pointer;
            }

            button {
                color: #FFFFFF;
            }
        }
    }

    .drawer-body {
        width: 90%;
        margin-left: 1rem;
    }

    .footer {
        .box-footer {
            h3 {
            font-size: 25px;
            font-weight: bold;
            color: #FFFFFF;
            }
        }
    
        Button {
            h3 {
                font-weight: 700;
                font-size: 28px;
                color: #FFFFFF;
            }
        }
    }
    
`