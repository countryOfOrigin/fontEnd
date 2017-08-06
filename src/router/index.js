import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/page/PageHome'
import PageReg from '@/components/page/PageReg'
import PageLogin from '@/components/page/PageLogin'
import PageCollect from '@/components/page/PageCollect'
import PageCart from '@/components/page/PageCart'
import PageOrder from '@/components/page/PageOrder'
import PageDetails from '@/components/page/PageDetails'
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
      path:'/details',
      component: PageDetails
    }
  ]
})
