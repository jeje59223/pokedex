import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/homepage/Homepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/pokemon/:pokemonName',
      name: 'pokemon-by-name',
      component: () => import('../views/pokemon/Pokemon.vue')
    },
  ]
})

export default router
