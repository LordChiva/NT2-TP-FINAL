<template>
  <div class="hello">
    <h1>{{ "ESTO ES LA PAGINA PRINCIPAL SEBA POR FAVOR REVIVI Y PASAME APP.VUE PORQUE ME PEGO UN TIRO" }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
