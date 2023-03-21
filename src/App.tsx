import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { HomeProvider } from './contexts/HomeContext'
import { Home } from './Pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <HomeProvider>
        <Home />
      </HomeProvider>
    </ThemeProvider>
  )
}
