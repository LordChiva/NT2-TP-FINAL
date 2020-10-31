import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Peliculas',
    component: () => import(/* webpackChunkName: "Peliculas" */ '../components/Peliculas.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Navegador',
    component: () => import(/* webpackChunkName: "Navegador" */ '../components/Navegador.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
