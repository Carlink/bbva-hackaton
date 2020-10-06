import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

// Pages
import Home from '@/pages/home'
import Login from '@/pages/login'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  base: '/bbva-hackaton/',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }
  ],
  linkActiveClass: "active",
  mode: "history"
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
