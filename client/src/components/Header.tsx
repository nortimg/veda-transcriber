import React from 'react';
import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'

import theme from '../theme'
import { TextField, IconButton } from '@material-ui/core';

interface IHeaderProps {}

const Wrapper = styled.header`
    display: flex; 
    width: 100%; 
    height: 70px;
    background-color: ${theme.PRIMARY};
`

const Search = styled.form`

`

export const Header: React.FC<IHeaderProps> = props => {
    return (
        <Wrapper>
            <IconButton>
                <Icon>
                    menu
                </Icon>
            </IconButton>
            <Search>
                <TextField label="Search" /> 
            </Search>
        </Wrapper>
    )
}