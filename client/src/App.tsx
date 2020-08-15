import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './Routes'
import { IState, IAction } from './redux/redux.helpers'
import { checkAuthorize } from './redux/auth/auth.actions'
import { AuthAction } from './redux/auth/auth.helpers'
import NewProjectDialog from './components/NewProject'

interface IAppProps extends IState {}

const Container = styled.main`
  width: 100%; 
  height: 100%;
`

const App: React.FC<IAppProps> = props => {
  // TODO: Show Loader
  return (
    <Router>
      <Container>
        <Routes />
      </Container>
    </Router>
  );
}

const mapStateToProps = (state: IState) => state

export default connect(mapStateToProps)(App)