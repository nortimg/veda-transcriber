import React from 'react'
import { Drawer, List, ListItem } from '@material-ui/core'
import { connect } from 'react-redux'
import { IState } from '../redux/redux.helpers'
import { toggleSidebar } from '../redux/global/global.actions'
import { IGlobalAction } from '../redux/global/global.helpers'
import { Link } from 'react-router-dom'

interface ISidebarProps {
    isOpen: boolean
    toggleSidebar: () => IGlobalAction
}

const Sidebar: React.FC<ISidebarProps> = props => {
    const closeHandler = () => {
        props.toggleSidebar()
    }

    return (
        <Drawer
            open={props.isOpen}
            onClose={closeHandler}
        >
            <List>
                <ListItem>
                    <Link to="/new-transcription">
                        Новая транскрипция
                    </Link>
                </ListItem>
            </List>
        </Drawer>
    )
}

const mapStateToProps = (state: IState) => ({ isOpen: state.global.isSidebarOpen })
const mapDispatchToProps = {
    toggleSidebar
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)