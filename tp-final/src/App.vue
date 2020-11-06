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
    <router-view></router-view>
    
    <!-- <Publicidad /> -->
    <div class="contenedorFooter">
        <h1>footer pepe</h1>
    </div>
  
  </div>

</template>

<!--FIJENSE LOS COMENTARIOS QUE DEJE, TAMBIEN FIJARSE PARA QUÉ SE ESTA USANDO EL COMPONENTE DE USER Y USUARIOS!!!!-->

<!--DEPENDIENDO DE LA RESPUESTA QUE ME DE EL PROFESOR ME FIJO DE SACAR O NO LAS VIEWS CON ABOUT Y HOME-->

<script>
import Navegador from './components/Navegador.vue'
/* import Publicidad from './components/Publicidad.vue' */

export default {
  name: 'App',
  components: {
      Navegador,
      /* Publicidad */
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