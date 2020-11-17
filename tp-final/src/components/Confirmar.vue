<template>
  <div class="contenedorPrincipal">   
    <h1>Confirmar</h1>
    <table class="tableContainer">
      <tr class="tr">
        <td>
          <img alt="Peli foto"  v-bind:src="$store.getters.pelicula.imagen" class="imagen">
          <h1>{{$store.getters.pelicula.nombre}}</h1>
        </td> 
        <td v-for="(fecha,index) in $store.getters.pelicula.fechas" :key="index"> 
          <h3>Dia: </h3>
          <h4>{{$store.getters.pelicula.dia}} {{$store.getters.fecha}}</h4>
          <h3>Horario: </h3>
          <h4>{{$store.getters.pelicula.horario}}</h4>
          <h3>Butacas Seleccionadas: </h3>
          <div v-for="(butaca,index) in $store.getters.butacas" :key="index">
            <h4>{{butaca.fila}}{{butaca.columna}}</h4>
          </div>          
          <h3>Combos Seleccionados: </h3>
           <div v-for="(combo) in $store.getters.combos" :key="combo">
            <h4>{{combo}}</h4>
          </div>
        </td>  
      </tr>
    </table> 
      <div>
        <b-button class="botton"> <router-link to="/PantallaProductos">Volver</router-link></b-button>
      </div>   
  </div>
</template>

<style>

.tr {
  justify-content: center;
}

.tr td {
  margin-left: 50px;
}

</style>