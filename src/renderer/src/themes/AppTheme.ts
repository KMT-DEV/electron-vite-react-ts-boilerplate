import { createTheme } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { createLightTheme, createDarkTheme } from './AppThemeOptions'
type Props = {
  language: string
}
const AppLightTheme = ({ language }: Props): Theme => {
  return createTheme(createLightTheme({ themeLanguage: language }))
}
const AppDarkTheme = ({ language }: Props): Theme => {
  return createTheme(createDarkTheme({ themeLanguage: language }))
}

export { AppLightTheme, AppDarkTheme }
