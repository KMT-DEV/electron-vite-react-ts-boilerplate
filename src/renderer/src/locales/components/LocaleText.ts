import { useTranslation } from 'react-i18next'

type Props = {
  DictionaryKey?: string
}

const LocaleText = ({ DictionaryKey = '' }: Props): string => {
  const { t } = useTranslation()
  return t(DictionaryKey)
}

export default LocaleText
