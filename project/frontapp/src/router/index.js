import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/BoardTable',
      name: 'BoardTable',
      component: () => import('../views/BoardTable.vue'),
    },
    {
      path: '/BoardList',
      name: 'BoardList',
      component: () => import('../views/BoardList.vue'),
    },
    {
      path: '/BoardInfo',
      name: 'BoardInfo',
      component: () => import('../views/BoardInfo.vue'),
    },
    {
      path: '/BoardForm',
      name: 'BoardForm',
      component: () => import('../views/BoardForm.vue'),
    },
  ],
})

export default router
