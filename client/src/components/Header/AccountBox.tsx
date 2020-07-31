import React, { useState } from 'react'
import Icon from '@material-ui/core/Icon'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'

import { IconButton } from '../IconButton'

interface IAccountBoxState {
    isOpen: boolean
    anchorEl: null | HTMLButtonElement
}

export const AccountBox = () => {
    const [state, setState] = useState<IAccountBoxState>({
        isOpen: false,
        anchorEl: null
    })

    const openHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setState({
            isOpen: true,
            anchorEl: event.currentTarget
        })
    }

    const closeHandler = () => {
        setState({
            isOpen: false,
            anchorEl: null
        })
    }


    return (
        <>
            <IconButton
                onClick={openHandler}
                aria-controls="account-box-menu"
            >
                <Icon>
                    account_box
            </Icon>
            </IconButton>
            <Menu
                id="account-box-menu"
                open={state.isOpen}
                anchorEl={state.anchorEl}
                aria-haspopup="true"
                onClose={closeHandler}
            >
                <MenuItem>
                    <Link to="/settings">
                        Настройки
                    </Link>
                </MenuItem>
                {/* TODO: logout */}
                <MenuItem>
                    Выйти
                </MenuItem>
            </Menu>
        </>
    )
}