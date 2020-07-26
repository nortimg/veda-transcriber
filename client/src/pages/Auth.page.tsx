import React from 'react'
import Register from '../components/Auth/Register'
import { Login } from '../components/Auth/Login'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

interface IAuthPageProps { }

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    height: 100%;
`

const AuthPage: React.FC<IAuthPageProps> = () => {
    return (
        <Wrapper>
            <Switch>
                <Route path="/" exact>
                    <Register />
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>
            </Switch>
        </Wrapper>
    )
}

export default AuthPage