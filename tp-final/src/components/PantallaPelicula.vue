<template>
  <div class="pantallaPelicula">
   <!--     <h1>Pelicula ID: {{id}} </h1>
    <h1>{{$store.getters.mensaje}}</h1>
    <h4>{{$store.getters.nombreCompleto}}</h4>
    <h2>Amigos</h2>
    <input type="text" v-model="amigo">
    <button @click="addAmigo">Agregar</button>
      <ul>
        <li  v-for="(amigo,index) in $store.state.amigos" :key="index">
          {{amigo}}
        </li>
      </ul>           -->  
            
    <table class="tableContainer">
      <tr class="tr">
        <td>
          <img alt="Peli foto"  v-bind:src="$store.getters.pelicula.imagen" class="imagen">
          <h1>{{$store.getters.pelicula.nombre}}</h1>
        </td> 
        <td v-for="(fecha,index) in $store.getters.pelicula.fechas" :key="index"> 
          <h1>{{$store.getters.pelicula.dia}} {{$store.getters.pelicula.horario}}</h1>           
          <button class="boton" @click="fechaSeleccionada(fecha.fecha)">{{fecha.fecha}} </button>
          <button class="boton" @click="fechaSeleccionada(fecha.fecha2)">{{fecha.fecha2}} </button>
          <button class="boton" @click="fechaSeleccionada(fecha.fecha3)">{{fecha.fecha3}} </button>
          <button class="boton" @click="fechaSeleccionada(fecha.fecha4)">{{fecha.fecha4}} </button>  
        </td>  
      </tr>
    </table> 
    <b-input-group-append class="contenedorB">
      <b-button class="boton Volver" @click="peliculaenNull()"> <router-link to="/">Volver</router-link></b-button>	
      <div class="login">
        <div v-if="$store.getters.usuario == null">
          <b-button class="botton"><router-link to="/Usuarios">Login/Registro</router-link></b-button>
        </div> 
        <div v-if="$store.getters.usuario != null">
          <b-button class="boton Siguiente"> <router-link to="/SalaCine">Siguiente</router-link></b-button>
        </div>    
      </div>            
    </b-input-group-append> 
  </div>
</template>

<script>
/* import Peliculas  from "../components/Peliculas.vue"  */
/*import reyleon from "../assets/reyLeon.jpg" */
/* mport Publicidad from "../components/Publicidad.vue" */
/* import Peliculas from "../components/Peliculas.vue" */

export default {
data() {
    return{
       id:this.$route.params.id, 
       amigo:''
    }
},
  methods:{

    addAmigo()
    {
      this.$store.state.amigo=this.amigo;
      this.$store.dispatch('addAmigoAction');
      this.amigo= '';
    },
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
  
  components: {
      /*  Peliculas  */

  },
  

  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tr {
  justify-content: center;
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
    width: 100px;
    color: #9FADBD;
    background-color: rgb(21, 34, 50, 0.3);
    font-weight: bold;
}

.boton :hover{ 
    color: #C7D5E5;
}
</style>