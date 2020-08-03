import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import AuthPage from '../pages/Auth.page'
import TranscriptionPage from '../pages/Transcription.page'

export const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/transcription/:id">
                    <TranscriptionPage />
                </Route>
                <Redirect to="/transcription/123" />
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