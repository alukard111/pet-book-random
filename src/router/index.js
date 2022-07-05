import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Vuex from 'vuex';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'App',
    component: () => import('../App.vue'),
    beforeEnter: (to, from, next) => {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          next({ path: '/app'})
        } else {
          next()
        }
      })
    }
  },
  {
    path: '/signin',
    name: 'AlSignIn',
    component: () => import('../views/AlSignIn.vue'),
    beforeEnter: (to, from, next) => {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          next({ path: '/app'})
        } else {
          next()
        }
      })
    }
  },
  {
    path: '/registration',
    name: 'AlRegistration',
    component: () => import('../views/AlRegistration.vue'),
    beforeEnter: (to, from, next) => {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          next({ path: '/app'})
        } else {
          next()
        }
      })
    }
  },
  {
    path: '/app',
    name: 'AlAppMain',
    component: () => import('../views/AlAppMain.vue'),
    beforeEnter: (to, from, next) => {
      onAuthStateChanged(getAuth(), (user) => {
        if (!user) {
          next({ path: '/signin'})
        } else {
          next()
        }
      })
    }
  }
]

const router = new VueRouter({
  routes
})



export default router
