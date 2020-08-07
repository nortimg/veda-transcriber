import React from 'react'
import { Button, Icon } from '@material-ui/core'
import styled from 'styled-components'

interface IUploadButtonProps {
    id: string
    name: string
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

export const UploadButton: React.FC<IUploadButtonProps> = props => {
    return (
        <Button
            variant="contained"
            color="inherit"
        >
            <File id={props.id} name={props.name} />
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