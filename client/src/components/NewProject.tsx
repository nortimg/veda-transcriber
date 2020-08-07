import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Typography, Grid, TextField, Dialog, DialogTitle, Icon } from '@material-ui/core'
import { UploadButton } from './Buttons/UploadButton'
import { IState } from '../redux/redux.helpers'
import { toggleNewProjectDialog } from '../redux/new-project/new-project.actions'
import { INewProjectAction } from '../redux/new-project/new-project.helpers'
import { FullWidthGrid } from './FullGrid'
import { Row } from './Row'
import { SuccessButton } from './Buttons/SuccessButton'

interface INewTranscriptionProps {
    open: boolean
    toggleNewProjectDialog: () => INewProjectAction
}

const ProjectInfo = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 400px;
    padding: 0 25px 20px;

    ${Row} {
        width: 100%;
        margin-top: 10px;

        &:last-child {
            display: flex;
            max-height: 40px;
            margin-top: auto; 
            margin-bottom: 0;
        }
    }
`
const NewProjectDialog = styled(Dialog)`
    width: 900px;
    margin: 0 auto;
`

// function validateProjectData(data) {

// }

const NewTranscription: React.FC<INewTranscriptionProps> = props => {
    const handleClose = () => {
        props.toggleNewProjectDialog()
    }

    const createProject = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            const $form = event.currentTarget
            const formData = new FormData($form)

            const response = await fetch('/api/transcription/upload', { method: 'POST', body: formData })
            console.log(await response.json())
        } catch (e) {
            console.error(`New project creation error: ${e}`)
        }
    }

    return (
        <NewProjectDialog
            open={props.open}
            onClose={handleClose}
            fullWidth
        >
            <DialogTitle>
                Создание нового проекта
            </DialogTitle>

            <FullWidthGrid container justify="center" >
                <ProjectInfo
                    onSubmit={createProject}
                >
                    <Row>
                        <TextField
                            label="Название проекта"
                            fullWidth
                            name="title"
                        />
                    </Row>
                    <Row>
                        <TextField
                            label="Описание проекта"
                            placeholder="Вкратце расскажите, о чём эта лекция"
                            multiline
                            fullWidth
                            name="description"
                        />
                    </Row>
                    <Row>
                        <TextField
                            label="Ссылка на YouTube"
                            placeholder="Вдобавок к / вместо ссылки на Youtube можно прикрепить файл"
                            fullWidth
                            name="youtubeURL"
                        />
                    </Row>
                    <Row container justify="space-between">
                        <UploadButton
                            id="upload"
                            name="file"
                        />
                        <SuccessButton
                            type="submit"
                        >
                            Создать
                            &nbsp;
                            <Icon>send</Icon>
                        </SuccessButton>
                    </Row>
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