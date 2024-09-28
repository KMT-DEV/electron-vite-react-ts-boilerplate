import { Typography } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import { useTranslation } from 'react-i18next'

type Props = {
  DictionaryKey?: string
  variant?: Variant
  color?:
    | 'primary'
    | 'primary.contrastText'
    | 'text.primary'
    | 'text.secondary'
    | 'secondary'
    | 'secondary.dark'
    | 'secondary.contrastText'
    | 'error.main'
    | 'error.contrastText'
    | 'info.main'
    | 'success.main'
    | 'warning.main'
  weight?: 'lighter' | 'light' | 'bold' | string
  fontFamily?: string
}

const LocaleTypography = ({
  DictionaryKey = '',
  variant,
  color,
  weight = '8px',
  fontFamily
}: Props): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Typography variant={variant} color={color} sx={{ fontFamily: fontFamily, fontWeight: weight }}>
      {t(DictionaryKey)}
    </Typography>
  )
}

export default LocaleTypography
