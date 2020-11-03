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
    path: '/Productos',
    name: 'Productos',
    component: () => import('../components/Productos.vue')
  },
  {
    path: '/',
    name: 'Navegador',
    component: () => import(/* webpackChunkName: "Navegador" */ '../components/Navegador.vue')
  },

  {
    path: '/PantallaPelicula/:id',
    name: 'PantallaPelicula',
    component: () => import('../components/PantallaPelicula.vue')
  },
  {
    path: '/SalaCine',
    name: 'SalaCine',
    component: () => import('../components/SalaCine.vue')
  },

 
]

const router = new VueRouter({
  routes
})

export default router
