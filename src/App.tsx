import { GlobalStyle } from './styles/global'
import { MyButton } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MyButton variant="primary" />
      <MyButton variant="secondary" />
      <MyButton variant="success" />
      <MyButton variant="danger" />
      <MyButton />

      <GlobalStyle />
    </ThemeProvider>
  )
}
