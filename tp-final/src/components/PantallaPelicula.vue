<template>
  <div class="pantallaPelicula">
    <h1>Pelicula ID: {{id}} </h1>
    <h1>{{$store.getters.mensaje}}</h1>
    <h4>{{$store.getters.nombreCompleto}}</h4>
    <h2>Amigos</h2>
    <input type="text" v-model="amigo">
    <button @click="addAmigo">Agregar</button>
      <ul>
        <li  v-for="(amigo,index) in $store.state.amigos" :key="index">
          {{amigo}}
        </li>
      </ul>            
            
    <table class="tableContainer">
      <tr>
        <!-- <td v-for="(pelicula,index) in peliculas" :key="index">
            <img alt="Peli foto"  v-bind:src="pelicula.imagen" class="imagen" width="50%" height="50%">
            
        </td> -->
        <td class="dias">
       <!--    <h1>{{pelicula.dia}} {{pelicula.horario}}</h1>  
          <ul v-for="(dia,index) in dias" :key="index">
            <li class="boton">{{dia.fecha}} </li>
            <li class="boton">{{dia.fecha2}} </li>
            <li class="boton">{{dia.fecha3}} </li>
            <li class="boton">{{dia.fecha4}} </li>
          </ul>  -->
        </td>
      </tr>
    </table> 
    <!--<h1>{{ "aca hay que buscar la manera de vincular la pelicula a la cual clickeamos" }}</h1>-->
     <div>
          <!--LA PREGUNTA ES: DE VERDAD ES FACIL HACER UN "VOLVER"?
              ACTUALMENTE ESTO TE LLEVA AL INICIO -- ¡PREGUNTAR! -->
        <h1>{{ "aca hay que buscar la manera de vincular la pelicula a la cual clickeamos" }}</h1>
        <b-input-group-append class="contenedorB">
            <b-button class="boton Volver"> <router-link to="/">Volver</router-link></b-button>	
            <b-button class="boton Siguiente"> <router-link to="/SalaCine">Siguiente</router-link></b-button>
        </b-input-group-append> 
  </div>
</template>

<script>
 /* import Peliculas  from "../components/Peliculas.vue"  */
/* import reyleon from "../assets/reyLeon.jpg" */
import Publicidad from "../components/Publicidad.vue"
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
    }
  },
  
  watch:{
    $route(to)
    {
      this.id=to.params.id
    }
  },




  /**cambienle el name
   * , cambienle el tipo de la prop. Esa prop esta para algo?
     *  el título devuelve un número? Tiene metodos? esta para algo el script?*/
  name: 'pantallaPelicula',
  
  components: {
      Publicidad,
      /*  Peliculas  */

  },
  

  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>