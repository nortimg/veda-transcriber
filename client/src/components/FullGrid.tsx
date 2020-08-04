import styled from 'styled-components'
import { Grid } from '@material-ui/core'


export const FullHeightGrid = styled(Grid)`
    max-height: 100%;
    height: auto;
    margin-top: auto;
    margin-bottom: 0;
    flex-grow: 3; 
`

export const FullWidthGrid = styled(Grid)`
    max-width: 100%;
    width: 100%;
`