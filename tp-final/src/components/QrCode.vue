<template>
  <div>
    <br>
    <vue-qrcode :value="compra" />
    <br>
  </div>
</template>

<script>
import Axios from 'axios'
import VueQrcode from 'vue-qrcode'
 
export default {
  data() {
    return {
      compra: this.compraFinal(),
      combo: null,
      butaca: null,
      precioTotal: null,
      url: 'https://5fbc46e9c09c200016d4192c.mockapi.io/Confirmar'
    }
  },
  mounted() {
    this.guardarEnApi();
  },
  components: {
    VueQrcode,
  },
  methods: {    
    compraFinal() {            
      return JSON.stringify( "Usuario: " + this.$store.getters.usuario.usuario + 
       " Pelicula: " +  this.$store.getters.pelicula.nombre + 
       " Dia: " +  this.$store.getters.pelicula.dia + '' + this.$store.getters.fecha +
       " Precio Pelicula: $" + this.$store.state.precioPelicula +
       " Horario: " +  this.$store.getters.pelicula.horario +
       " Butacas: " +  this.butacas() +
       " Combos: " +  this.combos() +
       " TotalCombo " +  this.precioTotalCombo() + '' +
       " Total: $" + this.$store.getters.precioTotal ).replace('[','').replace(']','').replace('{','').replace('}','').replace('"','').replace('"','')
    },
    butacas() {
      for (let index = 0; index < this.$store.getters.butacas.length; index++) {
        if (index == 0) {
          this.butaca = this.$store.getters.butacas[index].columna + this.$store.getters.butacas[index].fila + ", ";
        } else {
          this.butaca = this.butaca + this.$store.getters.butacas[index].columna + this.$store.getters.butacas[index].fila + ", ";
        }
      }
      return this.butaca;
    },
    combos() {      
      for (let index = 0; index < this.$store.getters.combos.length; index++) {
        if (index == 0) {
          this.combo = this.$store.getters.combos[index].nombre + " (Precio: " + this.$store.getters.combos[index].precio + " Cant: " + this.$store.getters.combos[index].cant + " Total: $" + this.$store.getters.combos[index].precio*this.$store.getters.combos[index].cant + "), ";
        } else {
          this.combo = this.combo + this.$store.getters.combos[index].nombre + " (Precio: " + this.$store.getters.combos[index].precio + " Cant: " + this.$store.getters.combos[index].cant + " Total: $" + this.$store.getters.combos[index].precio*this.$store.getters.combos[index].cant + "), ";
        }
      }
      return this.combo;
    },
    precioTotalCombo() {
      if (this.$store.getters.dolar == 1) {   
        this.precioTotal = this.$store.getters.precioTotalcombos + "u$d "        
      }
      if (this.$store.getters.dolar == 0) {
         this.precioTotal = " $" + this.$store.getters.precioTotalcombos
      }
      if (this.$store.getters.usuario.vip == true) {
        this.precioTotal = this.precioTotal + " *Incluye descuento del 10% por ser Cliente VIP "
      }
      return this.precioTotal;
    },
    async guardarEnApi() {
      try {
        const un = {Usuario:this.$store.getters.usuario.usuario,Pelicula:this.$store.getters.pelicula.nombre,
        Dia: this.$store.getters.pelicula.dia, fecha: this.$store.getters.fecha,Horario: this.$store.getters.pelicula.horario,
        Butacas: this.$store.getters.butacas, Combos: this.$store.getters.combos, TotalCombo: this.$store.getters.precioTotalcombos,
        Total: this.$store.getters.precioTotal,Dolar:this.$store.getters.dolar,Vip:this.$store.getters.usuario.vip}
        const res = await Axios.post(this.url,un);
        console.log(res.data)
      } catch (error) {
        alert("Error")
      }
      
    }
  },
}
</script>