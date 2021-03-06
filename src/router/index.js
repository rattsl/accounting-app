import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/accounting',
    name: 'accounting',
    component: () => import('../views/Accounting.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
