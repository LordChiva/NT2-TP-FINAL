<template>
  <div id="app">    
      <img alt="Vue logo" src="./assets/Titulo.png">
     <!--  <b-row>
        <b-col>izquierda</b-col>
        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row> -->
      

     <!-- <router-link to="/">Home <router-link> -->
 
      <!--  <Home /> -->
  
      <!-- <Peliculas /> -->
      <Productos />
      <Usuarios  />
  </div>
</template>

<script>
 /* import HelloWorld from './components/HelloWorld.vue'  */
 import Usuarios from './components/Usuarios.vue'  
/* import Peliculas  from './components/Peliculas.vue' */
import Productos  from './components/Productos.vue'
/* import Productos  from './components/Home.vue'   */  

export default {
  name: 'App',
  components: {
     /* HelloWorld, */
    Usuarios,
     /* Peliculas */
    Productos,
    /* Home   */
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
