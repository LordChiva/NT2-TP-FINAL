<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Pepe"/>
    <img alt="Vue logo" src="./assets/starWars.jpg">
   <Usuarios  />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue' 
import Usuarios from './components/Usuarios.vue'  

export default {
  name: 'App',
  components: {
    HelloWorld,
    Usuarios
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
