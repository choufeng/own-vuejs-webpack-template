import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

let router = new VueRouter()

router.map({
  '/': {
    name: 'index',
    component: function (resolve) {
      require(['./components/Index'], resolve)
    }
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})

router.start(App, 'app')
