import store from '../store'
import ru from '../locales/ru.json'
import en from '../locales/en.json'

//import es from '../locales/es.json'
//import de from '../locales/de.json'
//import fr from '../locales/fr.json'


const locales = {
  'ru-RU': ru,
  'en-US': en
}

export default function localizeFilter(key) {
  const locale = store.getters.info.locale || 'ru-RU'
  return locales[locale][key] || `[Localize error]: key ${key} not found`
}
