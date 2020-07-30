import React from 'react'
import styled from 'styled-components'

import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './hooks/routes.hook'

const Container = styled.main`
  width: 100%; 
  height: 100%;
` 

function App() {

  const routes = useRoutes(false)
  return (
    <Router>
      <Container>
        {routes}
      </Container>
    </Router>
  );
}

export default App;
