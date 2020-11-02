<template>
  <div class="hello">
    <h1>{{ "aca hay que buscar la manera de vincular la pelicula a la cual clickeamos" }}</h1>
     <div>
          <!--LA PREGUNTA ES: DE VERDAD ES FACIL HACER UN "VOLVER"?
              ACTUALMENTE ESTO TE LLEVA AL INICIO -- ¡PREGUNTAR! -->
          <b-button > <router-link to="/">Volver</router-link></b-button>	
    </div>
    <div>
            <b-button > <router-link to="/SalaCine">Siguiente</router-link></b-button>	
    </div>
  </div>
  


</template>

<script>
/* import Peliculas  from "../components/Peliculas.vue" */

export default {
  /**cambienle el name, cambienle el tipo de la prop. Esa prop esta para algo?
     *  el título devuelve un número? Tiene metodos? esta para algo el script?*/
  name: 'HelloWorld',
  props: {
    msg: String
  },


  data: () =>
{
  return{

  }
},
methods:
{

}
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/**<!--CARRUCEL O SLIDER PARA MOSTRAR UNA PRE-VIEW DE PELICULAS-->
<!--PENSAR ALGO PARA PROMOS-->
<!--PENSAR FOOTER, PELICULAS HOY, NOSOTROS, ETC...-> */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
