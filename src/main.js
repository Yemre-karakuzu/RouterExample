import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "./router/router"

Vue.use(VueRouter)

const router =new VueRouter({
  routes,
  mode:"history",//hash:default
  scrollBehavior(to){
    if(to.hash){
      return{
        selector:to.hash
      }
    }
  }
});
router.beforeEach((to,from,next)=>{
  next();
})
  
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
