import React from 'react';
import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'

import theme from '../../theme'
import { TextField as TF } from '@material-ui/core';
import { IconButton } from '../IconButton';
import { AccountBox } from './AccountBox';
import { IState } from '../../redux/redux.helpers';
import { toggleSidebar } from '../../redux/global/global.actions';
import { connect } from 'react-redux';
import { IGlobalAction } from '../../redux/global/global.helpers';

interface IHeaderProps {
    isSidebarOpen: boolean
    toggleSidebar: () => IGlobalAction
}

const Wrapper = styled.header`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 100%; 
    height: 70px;
    background-color: ${theme.PRIMARY};
`

const TextField = styled(TF)`
    && {
        max-width: 100%;
        width: 100%;
    }
`

const Search = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 0 20px;

    &:after {
        content: '🔍';
        display: block; 
        width: 20px;
        height: 20px;
        position: absolute;
        right: 0; 
        transform: translateX(-100%);
    }
`

const Burger = IconButton

const Header: React.FC<IHeaderProps> = props => {
    const burgerClickHandler = () => {
        props.toggleSidebar()
    }

    return (
        <Wrapper>
            <Burger
                edge="end"
                onClick={burgerClickHandler}
            >
                <Icon>
                    menu
                </Icon>
            </Burger>
            <Search>
                <TextField label="Search" />
            </Search>
            <AccountBox />
        </Wrapper>
    )
}

const mapStateToProps = (props: IState) => ({ isSidebarOpen: props.global.isSidebarOpen })
const mapDispatchToProps = {
    toggleSidebar
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)