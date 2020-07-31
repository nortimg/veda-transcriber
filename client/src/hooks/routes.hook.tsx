import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from '../pages/Auth.page'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar'

export const useRoutes = (isAuthenticated: boolean) => {
    
    if (isAuthenticated) {
        
        return (
            <Switch>
                <Redirect to="/" />
            </Switch>
        )
    }
    console.log(isAuthenticated)    
    return (
        <Switch>
            <Route path="/auth">
                <AuthPage />
            </Route>
            <Redirect to="/auth" />
        </Switch>
    )
}