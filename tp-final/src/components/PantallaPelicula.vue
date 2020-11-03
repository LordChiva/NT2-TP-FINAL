<template>
  <div class="pantallaPelicula">
    <table class="tableContainer">
      <tr v-for="(pelicula,index) in peliculas" :key="index">
        <td>
            <img alt="Peli foto"  v-bind:src="pelicula.imagen" class="imagen" width="50%" height="50%">
            <h1>{{pelicula.nombre}} </h1>
        </td>
        <td class="dias">
          <h1>{{pelicula.dia}} {{pelicula.horario}}</h1>  
          <ul v-for="(dia,index) in dias" :key="index">
            <li class="boton">{{dia.fecha}} </li>
            <li class="boton">{{dia.fecha2}} </li>
            <li class="boton">{{dia.fecha3}} </li>
            <li class="boton">{{dia.fecha4}} </li>
          </ul> 
        </td>
      </tr>
    </table> 
    <!--<h1>{{ "aca hay que buscar la manera de vincular la pelicula a la cual clickeamos" }}</h1>-->
     <div>
          <!--LA PREGUNTA ES: DE VERDAD ES FACIL HACER UN "VOLVER"?
              ACTUALMENTE ESTO TE LLEVA AL INICIO -- ¡PREGUNTAR! -->
      <b-button > <router-link to="/">Volver</router-link></b-button>	
    </div>
    <div>
      <b-button > <router-link to="/SalaCine">Siguiente</router-link></b-button>	
    </div>
    <Publicidad /> 
  </div>  
</template>

<script>
/* import Peliculas  from "../components/Peliculas.vue" */
import reyleon from "../assets/reyLeon.jpg"
import Publicidad from "../components/Publicidad.vue"

export default {
  /**cambienle el name, cambienle el tipo de la prop. Esa prop esta para algo?
     *  el título devuelve un número? Tiene metodos? esta para algo el script?*/
  name: 'pantallaPelicula',
  props: {
    msg: String
  },
  components: {
      Publicidad
  },
  data: () => {
    return{
      peliculas:[
        {nombre: "El Rey León",
          imagen:reyleon,
          dia:"Sabado",
        horario: "20:00hs",}
      ],
      dias:[
        {
          fecha:" 17/10/2020",
          fecha2:" 24/10/2020",
          fecha3:" 31/10/2020",
          fecha4:" 01/11/2020"
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**<!--CARRUCEL O SLIDER PARA MOSTRAR UNA PRE-VIEW DE PELICULAS-->
<!--PENSAR ALGO PARA PROMOS-->
<!--PENSAR FOOTER, PELICULAS HOY, NOSOTROS, ETC...-> */
.pantallaPelicula {
  color: red;
}
.tableContainer > tr {
        display: grid;
        grid-template-columns: repeat(3, 50%);
    }
.dias ul li {
  list-style: none;
  margin: 5%;
}

.dias ul li:hover {
  list-style: none;
  color: #fff !important;
   background-color: #007bff;
   cursor: pointer;
}
</style>