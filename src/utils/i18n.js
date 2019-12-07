

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../locale/ens.json'
import ru from '../locale/rus.json'

Vue.use(VueI18n)

export const i18n = new VueI18n({
	locale: 'ru',
	fallbackLocale: 'en',
	messages: {
		en,
		ru
	}
})