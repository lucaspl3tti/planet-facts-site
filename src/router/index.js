import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mercury',
      component: () => import('../views/Mercury.vue'),
    },
    {
      path: '/venus',
      name: 'venus',
      component: () => import('../views/Venus.vue')
    },
    {
        path: '/earth',
        name: 'earth',
        component: () => import('../views/Earth.vue')
    },
    {
        path: '/mars',
        name: 'mars',
        component: () => import('../views/Mars.vue')
    },
    {
        path: '/jupiter',
        name: 'jupiter',
        component: () => import('../views/Jupiter.vue')
    },
    {
        path: '/saturn',
        name: 'saturn',
        component: () => import('../views/Saturn.vue')
    },
    {
        path: '/uranus',
        name: 'uranus',
        component: () => import('../views/Uranus.vue')
    },
    {
        path: '/neptune',
        name: 'neptune',
        component: () => import('../views/Neptune.vue')
    },
  ]
})

export default router
