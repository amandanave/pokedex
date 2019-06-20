import Vue from 'vue'
import Router from 'vue-router'
import Pokedex from '@/views/Pokedex'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pokedex',
      component: Pokedex
    },
  ]
})
