import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cocktails',
      name: 'cocktails',
      component: () => import('../views/Cocktails.vue')
    },
    {
      path: '/cocktails/:cocktail',
      name: 'cocktailSummary',
      component: () => import('../cocktails/components/Cocktail.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#routerAnchor',
      behavior: 'smooth'
    }
  }
})

export default router
