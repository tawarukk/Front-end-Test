import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: () => import('../views/PaymentView.vue')
    },
    {
      path: '/Wait',
      name: 'Wait',
      component: () => import('../views/WaitView.vue')
    },
    {
      path: '/Check',
      name: 'Check',
      component: () => import('../views/CheckView.vue')
    },
    {
      path: '/Manage',
      name: 'Manage',
      component: () => import('../views/ManageView.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Test',
      name: 'Test',
      component: () => import('../views/TestView.vue')
    },
  ]
})

export default router
