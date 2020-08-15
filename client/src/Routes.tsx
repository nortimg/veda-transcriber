import React, { useEffect } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import AuthPage from './pages/Auth.page'
import ProjectPage from './pages/Project.page'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar'
import NewProjectDialog from './components/NewProject'
import { IState, IAction } from './redux/redux.helpers'
import { connect } from 'react-redux'
import { IAuthContextState, AuthAction } from './redux/auth/auth.helpers'
import { checkAuthorize } from './redux/auth/auth.actions'


interface IRoutesProps {
    isAuthenticated: Boolean
    checkAuthorize: () => IAction<AuthAction>
}

const Routes: React.FC<IRoutesProps> = ({ checkAuthorize, isAuthenticated }) => {
    useEffect(() => {
        checkAuthorize()
    }, [isAuthenticated])

    if (isAuthenticated) {
        return (
            <>
                <Header />
                <Sidebar />
                <Switch>
                    <Route path="/project/:id">
                        <ProjectPage />
                    </Route>
                    <Redirect to="/new-project" />
                </Switch>
                {/* Absolute positioned dialog window */}
                <NewProjectDialog /> 
            </>
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

const mapStateToProps = (state: IState): IAuthContextState => state.auth.context
const mapDispatchToProps = {
    checkAuthorize
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))