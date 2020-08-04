import styled from "styled-components";
import { Button } from "@material-ui/core";

export const SuccessButton = styled(Button)`
    && {
        display: flex;
        align-items: center;
        background-color: #66bb6a;
        color: white;
        transition: .3s all ease;

        &:hover {
            background-color: #66bb6a;
            opacity: .8;
        }
    }
`