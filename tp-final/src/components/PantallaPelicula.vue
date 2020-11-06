<template>
  <div class="hello">
     <!-- <div class="botonVolver"> -->
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
