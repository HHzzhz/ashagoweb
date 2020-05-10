import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import './plugins/ant-design-vue.js'

import HomePage from './components/contents/HomePage.vue'
import SearchResultPage from './components/contents/SearchResultPage.vue'
import Login from './components/contents/LoginPage.vue'
import SignUp from './components/contents/SignUpPage.vue'
import BlogDetail from './components/contents/BlogDetail.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
//路由
const routes = [
  { path: '/home', component: HomePage },
  { path: '/', redirect: '/home' },
  { path: '/search_result', component: SearchResultPage },
  { path: '/login', component: Login },
  { path: '/sign_up', component: SignUp },
  { path: '/blogs/:id', component: BlogDetail}
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

const store = new Vuex.Store({
  state: {
    login: false,
    nick_name : ""
  },
  mutations: {
    login(state, nick_name) {
      state.login = true
      state.nick_name = nick_name
    },
    logout(state) {
      state.login = false
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
