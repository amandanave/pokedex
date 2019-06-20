import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
// Imported AdjForNoun component
import AdjForNoun from '@/views/AdjForNoun'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rhymesaurus',
      component: Rhymesaurus
    },
      // Added new route definition
      {
      path: '/adjfornoun',
      name: 'adjfornoun',
      component: AdjForNoun
      }
  ]
})
