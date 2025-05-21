
import React from 'react'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { Summary } from './components/Summary'
import { Meals } from './components/Meals'
import { DUMMY_MEALS } from './data'
import { Button } from './components/UI/Button'



const theme = {
  colors: {
    cherry: '#8a2b06',
    darkCherry: '#5A1F08',
    grey: 'rgb(56, 56, 56)',
    orange: 'rgb(173, 85, 2)',
    lightGrey: '#B0B0B0',
    disabled: '#CAC6C4',
    white: '#FFFFFF',
  }
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header/>
       <Summary/>
       <Meals meals = {DUMMY_MEALS}/>
       <Button/>
    </ThemeProvider>
  )
}

export default App