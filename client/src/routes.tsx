import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from './pages/Auth.page'

export const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Switch>
                {/* To Do Pages */}
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage /> 
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}