import { AppLightTheme, AppDarkTheme } from './themes/AppTheme'
import { GlobalStyles, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './locales/config'

import MainPage from './components/pages/MainPage'
import Home from './components/pages/pos/Home'

function App(): JSX.Element {
  const [theme, setTheme] = useState<Number>(1)
  const [lang, setLanguage] = useState<string>('ar')
  return (
    <ThemeProvider
      theme={theme === 0 ? AppLightTheme({ language: lang }) : AppDarkTheme({ language: lang })}
    >
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
