import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { HomeProvider } from './contexts/HomeContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <HomeProvider>
          <Router />
        </HomeProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
