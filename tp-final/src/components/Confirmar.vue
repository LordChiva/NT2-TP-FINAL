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
          <h3>Precio Pelicula: </h3>
          <h4>${{precioPelicula}}</h4>
          <h3>Butacas Seleccionadas: </h3>
          <div v-for="(butaca,c) in butacas" :key="'confirmar'+c">
            <h4>{{butaca.fila}}{{butaca.columna}}</h4>
          </div>          
          <h3>Combos Seleccionados:  <div v-if="this.$store.getters.dolar == 1">{{this.$store.getters.precioTotalcombos}}u$d</div>
          <div v-if="this.$store.getters.dolar == 0">${{this.$store.getters.precioTotalcombos}}</div></h3>

          <div v-for="(combo,cs) in this.$store.getters.combos" :key="'comboSelecc'+cs">       
            <h4>x{{combo.cant}} {{combo.nombre}} = ${{combo.precio * combo.cant}}</h4>            
          </div>
          <h3>Total: </h3>
          <h4>${{total}}</h4>
          

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
  import axios from 'axios'
  export default {
    data() {
      return {
        pelicula: this.$store.getters.pelicula,
        fecha: this.$store.getters.fecha,
        butacas: this.$store.getters.butacas,
        combos: this.$store.getters.combos,
        usuarios:[],
        precioPelicula:this.$store.getters.precioPelicula,
        total:0,
        pepe:'hola'
      }
    },
    mounted()
    {
      console.log("Confirmar")
      this.usuarios = this.consultandoMockApi(); 
       this.total=this.sumarTodo()
    },
    methods: {
      combosenNull() {
        this.$store.state.precioTotalcombos=null;           
        this.$store.dispatch('agregarPrecioTotalcombos',null);
        this.$store.state.combos=null;           
        this.$store.dispatch('agregarCombos',null);
        this.$store.state.dolar = 0;           
        this.$store.dispatch('agregarDolar',0);
      },    
      consultandoMockApi() {
        axios.get('https://5fbc46e9c09c200016d4192c.mockapi.io/Usuarios')
        .then((response)=> {
          const respuesta = response.data
          this.usuarios=respuesta
        })
      },
      sumarTodo()
      {
        if(this.$store.getters.usuario.vip==false)
        {
          
           this.total= this.$store.state.precioTotalcombos+this.$store.state.precioPelicula
           this.$store.state.precioTotal = this.total;           
          this.$store.dispatch('agregarTotal',this.total); 
          return this.total
        }
        else
        {
          console.log("Cuanto hay aca Pelicula "+ this.$store.state.precioPelicula)
          console.log("Cuanto hay aca TotalCombos "+ this.$store.state.precioTotalcombos)

          this.total= this.$store.state.precioTotalcombos+(this.$store.state.precioPelicula-this.$store.state.precioPelicula*0.1)
          this.$store.state.precioTotal = this.total;           
          return this.total
        }
        
      }
    }
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