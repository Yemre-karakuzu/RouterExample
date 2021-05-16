import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "./router/router"

Vue.use(VueRouter)

const router =new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
