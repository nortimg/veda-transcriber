import React from 'react'
import { Register } from '../components/Register'
import styled from 'styled-components'

interface IAuthPageProps { }

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    height: 100%;
`

export const AuthPage: React.FC<IAuthPageProps> = () => {


    return (
        <Wrapper>
            <Register />
        </Wrapper>
    )
}