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
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    }, 
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog.vue')
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
  ]
})