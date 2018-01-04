import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from '../../vuex/store'
import tools from '../../utils/tools'
import '../../assets/scss/common.scss'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import FastClick from 'fastclick'

FastClick.attach(document.body)

Vue.use(VueRouter)
Vue.use(Element)

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
    // 处理jssdk签名,兼容history模式
    if (!store.state.iosUrl) {
      store.commit('setUrl', document.URL)
    }
    next()
})

new Vue({
    el: '#app',
    router,
    store
})
