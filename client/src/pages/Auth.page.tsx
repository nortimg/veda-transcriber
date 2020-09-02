import React from 'react'
import Register from '../components/Auth/Register'
import Login from '../components/Auth/Login'
import { Switch, Route, Redirect } from 'react-router-dom'
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
                <Route path="/">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Redirect to="/" />
            </Switch>
        </Wrapper>
    )
}

export default AuthPage