import React from 'react'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

interface IUploadButtonProps {
    id: string
}

const File = styled.input.attrs(props => ({ type: 'File' }))`
    width: 0; 
    height: 0;
    visibility: hidden; 
`

const PointerLabel = styled.label`
    cursor: pointer;
`

export const UploadButton: React.FC<IUploadButtonProps> = props => {
    return (
        <Button
            variant="contained"
            color="primary"
        >
            <File id={props.id} />
            <PointerLabel htmlFor={props.id}>
                Файл
            </PointerLabel>
        </Button>
    )
}