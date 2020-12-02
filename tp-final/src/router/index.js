import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Peliculas',
    component: () => import(/* webpackChunkName: "Peliculas" */ '../components/Peliculas.vue')
  },
  {
    path: '/Cuenta',
    name: 'Cuenta',
    component: () => import('../views/Cuenta.vue')
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
{
  path: '/QrCode',
  name: 'QrCode',
  component: () => import('../components/QrCode.vue')
},
{
  path: '/CrearUsuario',
  name: 'CrearUsuario',
  component: () => import('../components/CrearUsuario.vue')
},
{
  path: '/Informe',
  name: 'Informe',
  component: () => import('../components/Informe.vue')
},

 
]

const router = new VueRouter({
  routes
})

export default router
