import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Mount from './components/Mounts.vue'
import Pet from './components/Pets.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/mounts',
      component: Mount
    },
    {
      path: '/pets',
      component: Pet
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
