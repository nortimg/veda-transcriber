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
    title: string
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
                <TextField label="Search" type="search" />
            </Search>
            <AccountBox />
        </Wrapper>
    )
}

const mapStateToProps = (props: IState) => ({ isSidebarOpen: props.global.isSidebarOpen, title: props.global.pageTitle })
const mapDispatchToProps = {
    toggleSidebar
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)