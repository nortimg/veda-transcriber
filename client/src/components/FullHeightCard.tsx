import styled from 'styled-components'
import Card from '@material-ui/core/Card';


export const FullHeightCard = styled(Card) <{ elevation?: string | number }>`
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 90%;
    padding: 20px 0 50px 0;
`