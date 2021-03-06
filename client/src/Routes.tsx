import React, { useEffect, useMemo } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import AuthPage from './pages/Auth.page'
import ProjectsPage from './pages/Projects.page'
import ProjectPage from './pages/Project.page'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar'
import NewProjectDialog from './components/NewProject'
import { IState, IAction } from './redux/redux.helpers'
import { connect } from 'react-redux'
import { IAuthContextState, AuthAction } from './redux/auth/auth.helpers'
import { checkAuthorize } from './redux/auth/auth.actions'


interface IRoutesProps {
    isAuthenticated: boolean
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
                    <Route path="/projects" exact>
                        <ProjectsPage />
                    </Route>
                    <Route path="/projects/:id">
                        <ProjectPage />
                    </Route>
                </Switch>
                {/* Absolute positioned dialog window */}
                <NewProjectDialog />
            </>
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

const mapStateToProps = (state: IState): IAuthContextState => state.auth.context
const mapDispatchToProps = {
    checkAuthorize
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))