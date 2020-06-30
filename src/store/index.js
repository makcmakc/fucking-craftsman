import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import auth from './auth'
import error from './error'




Vue.use(Vuex)

export default new Vuex.Store({
  state: {   
    projects: [],
    articles: []
  },
  mutations: {
    getProjects(state) {
      axios.get('http://localhost:3000/projects')
        .then(response => {
          state.projects = response.data
        })  
    },
    getArticles(state) {
      axios.get('http://localhost:3000/articles')
        .then(response => {
          state.articles = response.data
        })        
    }
  },   
  actions: {
    getProjects({commit}) {
      commit('getProjects')
    },
    getArticles({commit}) {
      commit('getArticles')
    }
  },
  getters: {
    projects: s => s.projects,
    articles: s => s.articles,
    projectById: s => id => s.projects.find(p => p.id === id)
  },
  modules:{
    auth,
    error
  }
})
