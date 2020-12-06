<template>
  <div class="contenedorConfirmar">
    <table class="tablaConfirmar">
      <tr>
        <td class="tituloConfirmar">
          <h1>Confirmar</h1>
        </td>
      </tr>
      <tr>
        <td class="imagenConfirmar">
          <img alt="Peli foto"  :src="pelicula.imagen" class="imagen"><br>
          <h1>{{pelicula.nombre}}</h1>
        </td> 
        <td class="descripcionConfirmar"> 
          <h3>Dia: </h3>
            <h5>{{pelicula.dia}} {{fecha}}</h5>
          <h3>Horario: </h3>
            <h5>{{pelicula.horario}}</h5>
          <h3>Precio Pelicula: </h3>
          <div v-if="this.$store.getters.dolar == 1">
            <div class="confirmar" v-if="this.$store.getters.usuario.vip == true">
              <h5>{{(((precioPelicula-precioPelicula*10/100)/87)*this.butacas.length).toFixed(2)}}u$d</h5>
            </div>
            <div class="confirmar" v-if="this.$store.getters.usuario.vip == false">
              <h5>{{((precioPelicula/87)*this.butacas.length).toFixed(2)}}u$d</h5>
            </div>
          </div>
          <div v-if="this.$store.getters.dolar == 0">
            <div class="confirmar" v-if="this.$store.getters.usuario.vip == true">
              <h5>${{precioPelicula-precioPelicula*10/100}}</h5>
            </div>
            <div class="confirmar" v-if="this.$store.getters.usuario.vip == false">
              <h5>${{precioPelicula}}</h5>
            </div>
          </div>
          <h3>Butacas Seleccionadas: </h3>
          <div class="confirmar" v-for="(butaca,c) in butacas" :key="'confirmar'+c">
            <h5>{{butaca.fila}}{{butaca.columna}}</h5>
          </div>          
          <h3>Combos Seleccionados:  </h3>
          <div class="confirmar" v-if="this.$store.getters.dolar == 1">
            <h5>{{this.$store.getters.precioTotalcombos}}u$d</h5>
          </div>
          <div class="confirmar" v-if="this.$store.getters.dolar == 0">
            <h5>${{this.$store.getters.precioTotalcombos}}</h5>
          </div>
          <div class="confirmar" v-for="(combo,cs) in this.$store.getters.combos" :key="'comboSelecc'+cs">       
            <h5>x{{combo.cant}} {{combo.nombre}} = ${{combo.precio * combo.cant}}</h5>            
          </div>
        </td>  
      </tr>
      <tr>
        <td class="totalConfirmacion">
          <h3>Total: </h3>
          <div class="confirmar" v-if="this.$store.getters.dolar == 1">
            <h5>{{total.toFixed(2)}}u$d</h5>
          </div>
          <div class="confirmar" v-if="this.$store.getters.dolar == 0">
            <h5>${{total}}</h5>
          </div>
          <div class="confirmarDetalle" v-if="this.$store.getters.usuario.vip == true">
            <h6>*Incluye descuento del 10% por ser Cliente VIP</h6>
          </div>
        </td>
      </tr>
    </table>
    <br>
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
        dolar:87,
        subTotal:0,
        ticketVip:(this.$store.getters.precioPelicula-(this.$store.getters.precioPelicula*10/100))
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
           if (this.$store.getters.dolar == 1) {  
            this.total= (this.$store.state.precioTotalcombos%100+ (this.$store.state.precioPelicula*this.butacas.length)/this.dolar ) 
          } else {
            this.total= this.$store.state.precioTotalcombos+this.$store.state.precioPelicula*this.butacas.length
          }
          console.log(this.total ) 
          this.$store.dispatch('agregarTotal',this.total); 
          return this.total
        }
        else
        {
           if (this.$store.getters.dolar == 1) {               
            this.total= (this.$store.state.precioTotalcombos%100+ (this.ticketVip*this.butacas.length)/this.dolar ) 
            this.total= this.total-this.subTotal
          } else {
            this.total= this.$store.state.precioTotalcombos+this.ticketVip*this.butacas.length
            console.log(this.ticketVip*this.butacas.length) 
          }           
          this.$store.dispatch('agregarTotal',this.total); 
          return this.total
        }
        
      }
    }
  }
</script>

<style scoped>
.contenedorConfirmar {
  display: inline-block;
  justify-content: center;
  width: 100%;
  margin: 0px;
  padding: 0px;
}

.tablaConfirmar {
  display: inline-block;
  margin: 30px;
  background-color: #111E2E;
  border: 1px solid rgba(21, 34, 50, 0.7);
  border-radius: 10px;
}

.tituloConfirmar > h1{
  margin: 15px;
  font-size: 38px;
  color: #9FADBD;
  text-align: center;
}

.imagenConfirmar {
  display: inline-block;
  text-align: center;
  color: #9FADBD;
  margin: 0px 20px 0px 20px;
}

.descripcionConfirmar {
  display: inline-block;
  text-align: justify;
  margin: 20px 20px 20px 10px;
}

.descripcionConfirmar > h3 {
  font-size: 27px;
  color: #C7D5E5;
}

.descripcionConfirmar > h5 {
  font-size: 23px;
  color: #9FADBD;
}

.confirmar > h5{
  font-size: 23px;
  color: #9FADBD;
}

.totalConfirmacion {
  display: inline-block;
  text-align: center;
  margin: 0px 0px 20px 0px;
}

.totalConfirmacion > h3 {
  font-size: 27px;
  text-align: center;
  color: #C7D5E5;
}

.confirmarDetalle > h6 {
  font-size: 17px;
  color: #9FADBD;
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
  padding: 30px 0px 50px;
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