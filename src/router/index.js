import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/page/PageHome'//首页
import PageReg from '@/components/page/PageReg'
import PageLogin from '@/components/page/PageLogin'
import PageCollect from '@/components/page/PageCollect'
import PageCart from '@/components/page/PageCart'//购物车
import PageOrder from '@/components/page/PageOrder'//订单
import PageDetails from '@/components/page/PageDetails'//详情页
import PageUser from '@/components/page/PageUser'//个人主页
import PageAddress from '@/components/page/PageAddress'//地址管理

import MyTest from '@/components/MyTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/test',
      component: MyTest
    },
    {
      path:'/home',
      component: PageHome
    },
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/reg',
      component: PageReg
    },
    {
      path:'/login',
      component: PageLogin
    },
    {
      path:'/collect',
      component: PageCollect
    },
    {
      path:'/cart',
      component: PageCart
    },
    {
      path:'/order',
      component: PageOrder
    },
    {
      path:'/details/:tag',
      component: PageDetails
    },
    {
      path:'/user',
      component: PageUser
    },
    {
      path:'/user/address',
      component: PageAddress
    }
  ]
})
