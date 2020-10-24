import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
//import Routes from "./routes/routes"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

/*const router = new VueRouter({
  routes: Routes,
  made: "history"
});*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
