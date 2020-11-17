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
    path: '/PantallaProductos',
    name: 'PantallaProductos',
    component: () => import('../components/PantallaProductos.vue')
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
  {
    path: '/',
    name: 'Publicidad',
    component: () => import('../components/Publicidad.vue')
  },
  {
 
    path: '/Confirmar',
    name: 'Confirmar',
    component: () => import('../components/Confirmar.vue')
  },
  {
  path: '/Usuarios',
  name: 'Usuarios',
  component: () => import('../components/Usuarios.vue')
},

 
]

const router = new VueRouter({
  routes
})

export default router
