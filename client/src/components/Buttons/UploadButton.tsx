import React, { useRef } from 'react'
import { Button, Icon } from '@material-ui/core'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { IState } from '../../redux/redux.helpers'
import { uploadFile } from '../../redux/new-project/new-project.actions'
import { INewProjectAction } from '../../redux/new-project/new-project.helpers'

interface IUploadButtonProps {
    id: string
    name: string
    uploadFile: (file: File) => INewProjectAction
}

const File = styled.input.attrs(props => ({ type: 'file', name: props.name }))`
    width: 0; 
    height: 0;
    visibility: hidden; 
`

const PointerLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const UploadButton: React.FC<IUploadButtonProps> = props => {
    const uploadHandler = (event: React.FormEvent<HTMLInputElement>) => {
        try {
            const input = event.currentTarget as HTMLInputElement
            const file = (input.files as FileList)[0] 

            props.uploadFile(file)
        } catch (e) {
            console.error(`Upload File Error: ${e}`)   
        }
    }

    return (
        <Button
            variant="contained"
            color="inherit"
        >
            <File 
                id={props.id} 
                name={props.name} 
                onChange={uploadHandler} 
            />
            <PointerLabel htmlFor={props.id}>
                <Icon>
                    attach_file
                </Icon>
                &nbsp;
                Файл
            </PointerLabel>
        </Button>
    )
}



// const mapStateToProps = (state: IState) => state.newProject.info.sources.file
const mapDispatchToProps = {
    uploadFile
}

export default connect(null, mapDispatchToProps)(UploadButton)