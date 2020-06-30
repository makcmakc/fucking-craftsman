import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

//import { i18n } from './utils/i18n'
import VueToasted from 'vue-toasted'
import messagePlugin from '@/utils/message.plugin'
import Vuelidate from 'vuelidate'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import config from './firebase/config'

import EasySlider from 'vue-easy-slider'


Vue.use(EasySlider)


Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.use(VueToasted, {
  iconPack: 'fontawesome'
})

firebase.initializeApp({
  apiKey: config.API_KEY,
  authDomain: config.API_AUTH_DOMAIN,
  databaseURL: config.API_DATABASE_URL,
  projectId: config.API_PROJECT_ID,
  storageBucket: "",
  messagingSenderId: config.API_MESSAGING_SENDER_ID,
  appId: config.API_APP_ID
})



let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')	
  }
})
/*
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
*/