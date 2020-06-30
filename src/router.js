import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/morning-glory',
      name: 'morning-glory',
      component: () => import('./views/MorningGlory.vue')
    },
    {
      path: '/morning-glory/:id',
      name: 'project',
      component: () => import('./components/project/Article.vue')
    },    
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/remicore',
      name: 'remicore',
      component: () => import('./views/Remicore.vue')
    },             
    /* - Projects - */
    {
      path: '/okko-diablo',
      name: 'okko-diablo',
      component: () => import('./views/Projects/OkkoDiablo.vue')
    },
    {
      path: '/fuzz-factory',
      name: 'fuzz-factory',
      component: () => import('./views/Projects/FuzzFactory.vue')
    },
    {
      path: '/microsynth',
      name: 'microsynth',
      component: () => import('./views/Projects/MicroSynth.vue')
    },
    {
      path: '/big-muff',
      name: 'big-muff',
      component: () => import('./views/Projects/BigMuff.vue')
    },
    {
      path: '/tube-head',
      name: 'tube-head',
      component: () => import('./views/Projects/TubeHead.vue')
    },
    {
      path: '/tube-mic',
      name: 'tube-mic',
      component: () => import('./views/Projects/TubeMic.vue')
    },    
    /* - Articles - */  
    {
      path: '/node-arduion',
      name: 'node-arduion',
      component: () => import('./views/Development/NodeArduino.vue')
    },
    {
      path: '/wails-go',
      name: 'wails-go',
      component: () => import('./views/Development/WailsGo.vue')
    },              
  ]
})