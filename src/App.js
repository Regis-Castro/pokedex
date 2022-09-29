import React from 'react'
import {AppRoutes} from './router'
import { ThemeProvider } from './components/contexts/theme-context'
import { createGlobalStyle } from 'styled-components'
import themes from './components/contexts/default-theme'
import { theme as lalala }  from './components/contexts/theme-context'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <>
    <ThemeProvider theme={lalala ? themes.light : themes.dark}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
    </>
  );
}

export default App
