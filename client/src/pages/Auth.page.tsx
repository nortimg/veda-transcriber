import React, { useState } from 'react'
import { Register } from '../components/Auth/Register'
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

export const AuthPage: React.FC<IAuthPageProps> = () => {
    return (
        <Wrapper>
            <Switch>
                <Route path="/" exact>
                    <Login
                        authData={authData}
                        setAuthData={setAuthData}
                    />
                </Route>
                <Route path="/register" exact>
                    <Register
                        authData={authData}
                        setAuthData={setAuthData}
                    />
                </Route>
            </Switch>
        </Wrapper>
    )
}