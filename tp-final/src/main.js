import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import Routes from "./routes/routes"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

/* import { component } from 'vue/types/umd' */


import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import User from './components/User.vue'

const routes = [
{path:'',component:Home},
{path:'/user',component:User}

]

const router = new VueRouter({
  routes
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
