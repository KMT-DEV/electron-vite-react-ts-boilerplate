import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import DictionaryAR from './dictionaries/ar/DictionaryAR.json'
import DictionaryEN from './dictionaries/en/DictionaryEN.json'

const ArabicDictionary = {
  ...DictionaryAR
}
const EnglishDictionary = {
  ...DictionaryEN
}

i18next.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: EnglishDictionary
    },
    ar: {
      translation: ArabicDictionary
    }
  }
})

export default i18next
