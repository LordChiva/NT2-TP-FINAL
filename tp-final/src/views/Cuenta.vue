<template>
  <div class="cuenta">
    <div class="login">
      <div v-if="usuario == null">
        <b-button class="botton"><router-link to="/Usuarios">Login/Registro</router-link></b-button>
      </div> 
      <div v-if="usuario != null">
        <h3>Usuario: {{usuario.usuario}}</h3>
        <div v-if="this.usuario.vip == true">
        <h3>Es Vip</h3>
        </div>
        <h3>Nombre: {{usuario.nombre}}</h3>
        <h3>Apellido: {{usuario.apellido}}</h3>
        <h3>Cantidad de Peliculas Vistas: {{usuario.cantPelisVistas}}</h3>
      </div>    
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: this.$store.getters.usuario,
    }
  },
}
</script>
