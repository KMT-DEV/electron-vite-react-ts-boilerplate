import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  const { i18n } = useTranslation()
  const [lang, setLanguage] = useState<string>('ar')
  useEffect(() => {
    i18n.changeLanguage(lang)
    document.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])
  return (
    <Box>
      <Outlet />
    </Box>
  )
}

export default MainPage
