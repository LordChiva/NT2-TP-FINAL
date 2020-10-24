<template>
  <div id="app">    
    <h1>
      
    </h1> 
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Pepe"/>
    <!-- <Peliculas /> -->
      <Productos />  
       
       <Usuarios  />
       
  </div>
</template>

<script>
 import HelloWorld from './components/HelloWorld.vue' 
 import Usuarios from './components/Usuarios.vue'  
/* import Peliculas  from './components/Peliculas.vue' */
import Productos  from './components/Productos.vue'  

export default {
  name: 'App',
  components: {
     HelloWorld,
    Usuarios,
     /* Peliculas */
    Productos  
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
