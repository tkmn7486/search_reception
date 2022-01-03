import { createRouter, createWebHashHistory } from 'vue-router'
import passlock from '../views/passlock.vue'

const routes = [
  {
    path: '/',
    name: 'passlock',
    component: passlock
  },
  {
    path: '/self',
    name: 'Self',
    component: () => import('../views/Self.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
