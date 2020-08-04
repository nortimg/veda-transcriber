import React from 'react'
import { Drawer, List, ListItem, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { IState } from '../redux/redux.helpers'
import { toggleSidebar } from '../redux/global/global.actions'
import { IGlobalAction } from '../redux/global/global.helpers'
import { toggleNewProjectDialog } from '../redux/new-project/new-project.actions'
import { INewProjectAction } from '../redux/new-project/new-project.helpers'

interface ISidebarProps {
    isOpen: boolean
    toggleSidebar: () => IGlobalAction
    toggleNewProjectDialog: () => INewProjectAction
}

const Sidebar: React.FC<ISidebarProps> = props => {
    const closeHandler = () => {
        props.toggleSidebar()
    }

    const openNewProjectDialog = () => {
        props.toggleSidebar()
        props.toggleNewProjectDialog()
    }

    return (
        <Drawer
            open={props.isOpen}
            onClose={closeHandler}
        >
            <List>
                <ListItem>
                    <Link to="/transcription/123">
                        Транскрипция 123
                    </Link>
                </ListItem>
                <ListItem>
                    <Button
                        onClick={openNewProjectDialog}
                        color="primary"
                        variant="contained"
                        size="small"
                    >
                        Создать
                    </Button>
                </ListItem>
            </List>
        </Drawer>
    )
}

const mapStateToProps = (state: IState) => ({ isOpen: state.global.isSidebarOpen })
const mapDispatchToProps = {
    toggleSidebar,
    toggleNewProjectDialog
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)