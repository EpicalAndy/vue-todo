import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/AllCards.vue')
    },
    {
      path: '/completed',
      name: 'completed',
      component: () => import('../views/CompletedCards.vue')
    },
    {
      path: '/cancaled',
      name: 'cancaled',
      component: () => import('../views/CanceledCards.vue')
    },
    /* {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ]
})

export default router
