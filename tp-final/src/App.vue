<template>
  <div id="app">
    <div class="contenedorGeneral">
      <div class="logo">  
        <img alt="Cine logo" src="./assets/LogoPochoclos.png">
      </div>

      <div class="titulo">
        <h1>CinePOP</h1>
      </div>
      <!-- Por algun motivo el boton de Sign In se pasa por el culo lo que le modifico del css -->
      <b-input-group-append class="contenedorB">
        <div v-if="$store.getters.usuario == null">
          <b-button class="boton" variant="outline-primary"><router-link to="/Usuarios">Sign In</router-link></b-button>
        </div> 
        <div class="usuario" v-if="$store.getters.usuario != null">
          <h4>{{$store.getters.usuario.usuario}}</h4>
          <div v-if="$store.getters.usuario.vip == true">
            <i class="fas fa-star" style="color:#E5FF07;" ></i>
          </div>
          <b-button class="boton" variant="outline-primary" @click="cerrar()"><router-link to="/">Log Out</router-link></b-button>
        </div>
      </b-input-group-append>
    </div>
    <Navegador />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navegador from './components/Navegador.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
      Navegador,
      Footer
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

.logo {
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
  justify-content: flex-start;
}

.titulo > h1{
  display: inline-block;
  font-size: 70px;
  color: #9FADBD;
}

a {
  color: #9FADBD;
  text-decoration: none;
}

a :hover {
  text-decoration: none;
}

#nav a {
  font-weight: bold;
  color: #9FADBD;
  text-decoration: none;
}

.contenedorB{
  padding: 20px;
  display: inline-flex;
  justify-content: center;
}

.boton {
  padding: 5px;
  border: 1px solid rgba(21, 34, 50, 0.7);
  border-radius: 10px;
  margin: 0px 50px 0px 50px;
  width: 100px;
  color: #9FADBD;
  background-color: rgb(21, 34, 50, 0.3);
  font-weight: bold;
}

.boton :hover{ 
  color: #C7D5E5;
  background-color: none;
}

.usuario > h4 {
  font-size: 25px;
  color: #DA4127;
  text-align: center;
}
</style>