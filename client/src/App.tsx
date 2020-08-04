import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Header from './components/Header/Header'
import NewProject from './components/NewProject'
import { useRoutes } from './hooks/routes.hook'
import { IState, IAction } from './redux/redux.helpers'
import { checkAuthorize } from './redux/auth/auth.actions'
import { AuthAction } from './redux/auth/auth.helpers'


interface IAppProps extends IState {
  checkAuthorize: () => IAction<AuthAction>
}

const Container = styled.main`
  width: 100%; 
  height: 100%;
`

const App: React.FC<IAppProps> = props => {
  useEffect(() => {
    props.checkAuthorize()
  }, [])
  const { isAuthenticated } = props.auth.context
  const routes = useRoutes(isAuthenticated)


  // TODO: Show Loader
  return (
    <Router>
      <Container>
        <Header />
        <Sidebar />
        {routes}
        <NewProject />
      </Container>
    </Router>
  );
}

const mapStateToProps = (state: IState) => state
const mapDispatchToProps = {
  checkAuthorize
}

export default connect(mapStateToProps, mapDispatchToProps)(App);