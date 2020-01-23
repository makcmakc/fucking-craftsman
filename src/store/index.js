import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import content from './content'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  modules:{
    auth,
    content
  }
})
