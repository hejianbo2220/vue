import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

import index from '@/pages/index'
import pageBtn from '@/pages/pageBtn'
import pageTab from '@/pages/pageTab'
import pageList from '@/pages/pageList'
import chart from '@/pages/chart'
import vuex from '@/pages/vuex'
import linkage from '@/pages/linkage'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'hello',
    //   component: Hello
    // }

    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/btn',
      name: 'btn',
      component: pageBtn
    },
    {
      path: '/tab',
      name: 'tab',
      component: pageTab
    },
    {
      path: '/list',
      name: 'list',
      component: pageList
    },
    {
      path: '/chart',
      name: 'chart',
      component: chart
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex
    },
    {
      path: '/linkage',
      name: 'linkage',
      component: linkage
    }
  ]
})
