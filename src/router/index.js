import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomePage'
import Send from '@/views/Send'
import LBSMap from '@/views/LBSMap'
import Claim from '@/views/ClaimLuckyMoney'
import SendOK from '@/views/SendOK'
import SignIn from '@/views/SignIn'
import My from '@/views/My'

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
    },
    {
      path: '/claim/:id',
      name: 'Claim',
      component: Claim
    },
    {
      path: '/ok/:id',
      name: 'SendOK',
      component: SendOK
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
