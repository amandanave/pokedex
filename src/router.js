import Vue from 'vue'
import Router from 'vue-router'
import Pokedex from '@/views/Pokedex'
import Pokeimage from '@/views/Pokeimage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pokedex',
      component: Pokedex
    },
    {
      path: '/pokeimage',
      name: 'pokeimage',
      component: Pokeimage
    },
  ]
})
