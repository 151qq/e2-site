import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from '../../vuex/store'
import tools from '../../utils/tools'
import '../../assets/scss/common.scss'
import FastClick from 'fastclick'

FastClick.attach(document.body)

Vue.use(VueRouter)

// 实例化VueRouter
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
    next()
})

new Vue({
    el: '#app',
    router,
    store
})
