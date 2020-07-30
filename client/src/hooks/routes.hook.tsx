import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from '../pages/Auth.page'
import { Header } from '../components/Header'

export const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Header />
        )
    }

    return (
        <Switch>
            <Route path="/">
                <AuthPage /> 
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}