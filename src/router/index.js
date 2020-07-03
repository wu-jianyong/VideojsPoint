import Vue from 'vue'
import Router from 'vue-router'
import JsInit from '@/components/js-init'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'js-init',
      component: JsInit
    }
  ]
})
