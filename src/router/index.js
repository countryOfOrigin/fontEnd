import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/page/PageHome'
import PageReg from '@/components/page/PageReg'
import PageLogin from '@/components/page/PageLogin'

Vue.use(Router)

export default new Router({
  routes: [
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
  ]
})
