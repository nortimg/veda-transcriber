import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Typography, Grid, TextField, Dialog, DialogTitle } from '@material-ui/core'
import { UploadButton } from './UploadButton'
import { IState } from '../redux/redux.helpers'
import { toggleNewProjectDialog } from '../redux/new-project/new-project.actions'
import { INewProjectAction } from '../redux/new-project/new-project.helpers'
import { FullWidthGrid } from './FullGrid'

interface INewTranscriptionProps {
    open: boolean
    toggleNewProjectDialog: () => INewProjectAction
}

const ProjectInfo = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const NewProjectDialog = styled(Dialog)`
    width: 900px;
    margin: 0 auto;
`


const NewTranscription: React.FC<INewTranscriptionProps> = props => {
    const handleClose = () => {
        props.toggleNewProjectDialog()
    }

    return (
        <NewProjectDialog
            open={props.open}
            onClose={handleClose}
            fullWidth
        >
            <DialogTitle>
                Новый проект
            </DialogTitle>

            <FullWidthGrid container justify="center" >
                <ProjectInfo>
                    <Grid item xs={12}>
                        <TextField label="Название проекта" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Описание проекта"
                            fullWidth
                            multiline
                            rows="5"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Ссылка на YouTube" />
                    </Grid>
                    <Grid item xs={12}>
                        <UploadButton id="upload" />
                    </Grid>
                </ProjectInfo>
            </FullWidthGrid>
        </NewProjectDialog>
    )
}

const mapStateToProps = (state: IState) => ({ open: state.newProject.isDialogOpen })
const mapDispatchToProps = {
    toggleNewProjectDialog
}


export default connect(mapStateToProps, mapDispatchToProps)(NewTranscription)