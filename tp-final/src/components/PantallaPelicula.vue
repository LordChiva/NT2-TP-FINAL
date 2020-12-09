<template>
  <div class="pantallaPelicula">            
    <table class="tableContainer">
      <tr class="tr">
        <td>
          <img alt="Peli foto" v-bind:src="$store.getters.pelicula.imagen" class="imagen">
          <hr>
          <h3>{{$store.getters.pelicula.nombre}}</h3>
        </td> 
        <td v-for="(fecha,pe) in $store.getters.pelicula.fechas" :key="'peliculaselec'+pe"> 
          <h3>{{$store.getters.pelicula.dia}} {{$store.getters.pelicula.horario}}</h3>           
          <b-button class="boton" @click="fechaSeleccionada(fecha.fecha)">{{fecha.fecha}}</b-button>
          <b-button class="boton" @click="fechaSeleccionada(fecha.fecha2)">{{fecha.fecha2}}</b-button>
          <b-button class="boton" @click="fechaSeleccionada(fecha.fecha3)">{{fecha.fecha3}}</b-button>
          <b-button class="boton" @click="fechaSeleccionada(fecha.fecha4)">{{fecha.fecha4}}</b-button>  
        </td>  
      </tr>
    </table> 
    <b-input-group-append class="contenedorB">
      <b-button class="boton Volver" @click="peliculaenNull()"><router-link to="/">Volver</router-link></b-button>	
        <div v-if="$store.getters.usuario == null">
          <b-button class="boton"><router-link to="/Usuarios">Login/Registro</router-link></b-button>
        </div> 
        <div v-if="$store.getters.usuario != null">
          <b-button class="boton"><router-link to="/SalaCine">Siguiente</router-link></b-button>
        </div>         
    </b-input-group-append> 
  </div>
</template>

<script>
export default {
  data() {
      return{
        id:this.$route.params.id, 
      }
  },
  methods:{

    fechaSeleccionada (fecha) {  
      this.$store.state.fecha=fecha;           
      this.$store.dispatch('agregarFecha',fecha);
    },
    peliculaenNull() {
      this.$store.state.pelicula=null;           
      this.$store.dispatch('agregarPelicula',null);
    }
  },
  
  watch:{
    $route(to)
    {
      this.id=to.params.id
    }
  },
  name: 'pantallaPelicula',
  
  

  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pantallaPelicula{
  display: inline-block;
  justify-content: center;
  width: 100%;
  padding: 10px;
}

.pantallaPelicula > table > tr {
  width: 50%;
  display: inline-flex;
  justify-content: center;
  margin: 10px 0px 10px 0px;
}

.tableContainer {
  display: inline-flex;
  justify-content: center;
  width: 100%;
}

.tableContainer > tr > td > h3{
  font-size: 30px;
  color: #9FADBD;
  text-align: center;
}

.imagen{
  width: 300px;
  height: 300px;
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
    padding: 5px;
    display: inline-flex;
    justify-content: center;
}

.boton {
    padding: 5px;
    border: 1px solid rgba(21, 34, 50, 0.7);
    border-radius: 10px;
    margin: 0px 50px 0px 50px;
    width: 50%;
    color: #9FADBD;
    background-color: rgb(21, 34, 50, 0.3);
    font-weight: bold;
}

.boton :hover{ 
    color: #C7D5E5;
}
</style>