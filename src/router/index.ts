import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from "@/views/Signup/Signup.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
  path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  routes
})

export default router
