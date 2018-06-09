import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomePage'
import Send from '@/views/Send'
import LBSMap from '@/views/LBSMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Home' }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/send',
      name: 'Send',
      component: Send
    },
    {
      path: '/map',
      name: 'LBSMap',
      component: LBSMap
    }
  ]
})
