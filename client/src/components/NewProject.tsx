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
    height: 400px;
    padding: 0 25px 20px;

    ${Row} {
        width: 100%;
        margin-top: 10px;

        &:last-child {
            display: flex;
            max-height: 40px;
        }
    }
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
                Создание нового проекта
            </DialogTitle>

            <FullWidthGrid container justify="center" >
                <ProjectInfo>
                    <Row>
                        <TextField label="Название проекта" fullWidth />
                    </Row>
                    <Row>
                        <TextField
                            label="Описание проекта"
                            placeholder="Вкратце расскажите, о чём эта лекция"
                            multiline
                            fullWidth
                        />
                    </Row>
                    <Row>
                        <TextField 
                            label="Ссылка на YouTube" 
                            placeholder="Вдобавок к / вместо ссылки на Youtube можно прикрепить файл"
                            fullWidth
                        />
                    </Row>
                    <Row justify="space-between">
                        <UploadButton id="upload" />
                        <SuccessButton>
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