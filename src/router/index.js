import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/page/PageHome'//首页
import PageReg from '@/components/page/PageReg'//注册
import PageLogin from '@/components/page/PageLogin'//登录
import PageCollect from '@/components/page/PageCollect'//收藏
import PageCart from '@/components/page/PageCart'//购物车
import PageOrder from '@/components/page/PageOrder'//订单
import PageDetails from '@/components/page/PageDetails'//详情页
import PageUser from '@/components/page/PageUser'//个人主页
import PageAddress from '@/components/page/PageAddress'//地址管理
import PageEditAddress from '@/components/page/PageEditAddress'//编辑地址
import PageOrderAll from '@/components/page/PageOrderAll'//全部订单
import PageOrderPay from '@/components/page/PageOrderPay'//待付款订单
import PageOrderGo from '@/components/page/PageOrderGo'//待发货订单
import PageOrderWait from '@/components/page/PageOrderWait'//待收货订单
import PageOrderOn from '@/components/page/PageOrderOn'//已收货订单
import PageClassify from '@/components/page/PageClassify'//分类页

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
      redirect:'/order/all'
    },
    {
      path: '/order',
      component: PageOrder,
      children: [
        { path: "/order/all", component: PageOrderAll },
        { path: "/order/wait_pay", component: PageOrderPay },
        { path: "/order/wait_go", component: PageOrderGo },
        { path: "/order/wait_arrive", component: PageOrderWait },
        { path: "/order/on_arrive", component: PageOrderOn }
      ]
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
    },
    {
      path:'/user/address/edit/:id',
      component: PageEditAddress
    },
    {
      path:'/classify/:name',
      component: PageClassify
    }
  ]
})
