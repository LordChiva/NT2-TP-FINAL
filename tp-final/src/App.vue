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
        <div v-if="$store.getters.usuario == null">
          <b-button variant="outline-primary"><router-link to="/Usuarios">Login/Registro</router-link></b-button>
        </div> 
        <div v-if="$store.getters.usuario != null">
          <h4>{{$store.getters.usuario}}</h4><b-button variant="outline-primary" @click="cerrar()"><router-link to="/">Cerrar seccion</router-link></b-button>
        </div>
      </div>
    </div>
    <Navegador />
    <router-view/>
    <!-- <Publicidad /> -->
    <Footer />
  </div>
</template>

<script>
import Navegador from './components/Navegador.vue'
import Footer from './components/Footer.vue'
/* import Publicidad from './components/Publicidad.vue' */

export default {
  name: 'App',
  components: {
      Navegador,
      Footer/* ,
      Publicidad */
  },
  methods: {
    cerrar() {
      this.$store.state.usuario=null;           
      this.$store.dispatch('agregarUsuario',null);
    }
  },
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