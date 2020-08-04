import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import AuthPage from '../pages/Auth.page'
import ProjectPage from '../pages/Project.page'

export const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/transcription/:id">
                    <ProjectPage />
                </Route>
                <Redirect to="/new-transcription" />
            </Switch>
        )
    }
    
    return (
        <Switch>
            <Route path="/auth">
                <AuthPage />
            </Route>
            <Redirect to="/auth" />
        </Switch>
    )
}