<template>
  <div class="contenedorPrincipal">   
    <h1>Confirmar</h1>
    <table class="tableContainer">
      <tr class="tr">
        <td>
          <img alt="Peli foto"  :src="pelicula.imagen" class="imagen">
          <h1>{{pelicula.nombre}}</h1>
        </td> 
        <td> 
          <h3>Dia: </h3>
          <h4>{{pelicula.dia}} {{fecha}}</h4>
          <h3>Horario: </h3>
          <h4>{{pelicula.horario}}</h4>
          <h3>Butacas Seleccionadas: </h3>
          <div v-for="(butaca,c) in butacas" :key="'confirmar'+c">
            <h4>{{butaca.fila}}{{butaca.columna}}</h4>
          </div>          
          <h3>Combos Seleccionados:  <div v-if="this.$store.getters.dolar == 1">{{this.$store.getters.precioTotalcombos}}u$d</div>
          <div v-if="this.$store.getters.dolar == 0">${{this.$store.getters.precioTotalcombos}}</div></h3>
           
          
          
          
          <div v-for="(combo,cs) in this.$store.getters.combos" :key="'comboSelecc'+cs">       
            <h4>x{{combo.cant}} {{combo.nombre}} = ${{combo.precio * combo.cant}}</h4>            
          </div>

          <div v-if="this.$store.getters.usuario.vip == true">
            <h6>*Incluye descuento del 10% por ser Cliente VIP</h6>
          </div>
        </td>  
      </tr>
    </table> 
      <b-input-group-append class="contenedorB">
        <b-button class="boton" @click="combosenNull()"><router-link to="/PantallaProductos">Volver</router-link></b-button>
        <b-button class="boton"><router-link to="/QrCode">Confirmar</router-link></b-button>   
      </b-input-group-append>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pelicula: this.$store.getters.pelicula,
      fecha: this.$store.getters.fecha,
      butacas: this.$store.getters.butacas,
      combos: this.$store.getters.combos,
    }
  },
  mounted()
  {
    console.log("Confirmar")
  },
  methods: {
    combosenNull() {
      this.$store.state.precioTotalcombos=null;           
      this.$store.dispatch('agregarPrecioTotalcombos',null);
      this.$store.state.combos=null;           
      this.$store.dispatch('agregarCombos',null);
      this.$store.state.dolar = 0;           
      this.$store.dispatch('agregarDolar',0);
    }
  },

}

</script>

<style>

.tr {
  justify-content: center;
}

.tr td {
  margin-left: 50px;
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
    background-color: rgba(21, 34, 50, 0.3);
    font-weight: bold;
}

.boton :hover{ 
    color: #C7D5E5;
    background-color: none;
}
</style>