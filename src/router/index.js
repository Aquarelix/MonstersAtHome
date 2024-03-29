import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from "@/views/LoginView.vue"
import ProfileView from "@/views/ProfileView.vue"
import HowToPlayView from "@/views/HowToPlayView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: "login",
    component: LoginView
  },
  {
    path: '/profile',
    name: "profile",
    component: ProfileView
  },
  {
    path: '/howtoplay',
    name: "howtoplay",
    component: HowToPlayView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
