import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './plugins/ant-design-vue.js'

import HomePage from './components/contents/HomePage.vue'
import SearchResultPage from './components/contents/SearchResultPage.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
//路由
const routes = [
  { path: '/home', component: HomePage },
  { path: '/', redirect: '/home' },
  { path: '/search_result',component: SearchResultPage }
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
