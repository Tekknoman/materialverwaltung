import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from "@/views/Signup/Signup.vue";
import Login from "@/views/Login/Login.vue";
import AccountManagement from "@/views/AccountManagement/AccountManagement.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
  path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/accountManagement',
    name: 'AccountManagement',
    component: AccountManagement,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
