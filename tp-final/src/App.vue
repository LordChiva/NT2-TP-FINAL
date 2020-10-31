<template>
  <div id="app">
    <div class="contenedorGeneral">
      <div class="logo">  
        <img alt="Cine logo" src="./assets/LogoPochoclos.png">
      </div>
      <div class="titulo">
        <h1>CinePOP</h1>
      </div>
      <div class="login">
        <p>Login/Registro</p>
      </div>
      
    </div>

  
   <Navegador />
    <!-- <SalaCine /> -->
    
   
  
   
    <div class="contenedorGeneral">
      <div class="contenedorFooter">
        <h1>footer pepe</h1>
      </div>
    </div>
   
   <!-- <Productos />  -->
  
     

   

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <!--aca iría la barra de navegación-->
    <!-- </div> -->
    <!-- <router-view/> -->
  </div>


</template>

<script>
import Navegador  from './components/Navegador.vue'
 /*  import Usuarios   from './components/Usuarios.vue'  */
  /* import Peliculas  from './components/Peliculas.vue'  */
  /* import Publicidad  from './components/Publicidad.vue' */
  /* import Productos  from './components/Productos.vue'  */ 
  /* import SalaCine  from './components/SalaCine.vue' */

export default {
  name: 'App',
  components: {
     /*   Usuarios, */
      /* Peliculas, */
      /* Publicidad, */
      /* Productos, */
      Navegador,
      /* SalaCine */
  }
}
</script>

<style>
#app {
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(11, 22, 34);
}

.contenedorGeneral{
  display: inline-flex;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  text-align: center;
  align-items: center;
}

.logo{
  display: inline-block;
  width: 13%;
}

.logo > img{
  display: inline-block;
  width: 110px;
}

.titulo{
  display: inline-flex;
  width: 67%;
  justify-content: start;
}

.titulo > h1{
  display: inline-block;
  font-size: 70px;
  color: #9FADBD;
}

.login{
  display: inline-flex;
  width: 20%;
  color: #9FADBD;
}
</style>
