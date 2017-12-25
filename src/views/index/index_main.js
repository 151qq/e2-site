import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from '../../vuex/store'
import tools from '../../utils/tools'
import '../../assets/scss/common.scss'

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
    if (to.meta.title) {
        document.title = to.meta.title
    }

    if (!to.meta.token) {
        next()
        return
    }
    var code = to.query.code
    var e2Token = jsCookie.get('e2_enterprise_staff')
    if (code && !e2Token) {
        tools.getTokenByCode(code, (res) => {
            var data = res.result.result;
            jsCookie.set('e2_enterprise_staff', data.e2_enterprise_staff)
            jsCookie.set('token', 'data.token')
            // 清空code
            to.query.code = ''
            next()
        })
    } else if (!code && !e2Token) {
        tools.goWechatAuth(window.location.href)
    } else {
        next()
    }
})

new Vue({
    el: '#app',
    router,
    store
})
