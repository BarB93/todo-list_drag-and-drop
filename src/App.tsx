import React from 'react'

import { TodoContextProvider } from './context/TodoContext'
import Content from './components/Content'

import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#9012fe',
    },
    secondary: {
      main: '#b2aabf',
    },
  },
})

function App() {
  return (
    <TodoContextProvider>
      <ThemeProvider theme={theme}>
        <Content />
      </ThemeProvider>
    </TodoContextProvider>
  )
}

export default App
