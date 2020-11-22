<template>
<div>
  <vue-qrcode :value="compra" />
  <h1>Hola QR</h1>
  {{compra}}
  
  </div>
</template>
<script>
import VueQrcode from 'vue-qrcode'
/* import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader' */
 
export default {
  data() {
    return {
      compra: [
      " Pelicula: ", this.$store.getters.pelicula.nombre, 
      " Dia: ", this.$store.getters.pelicula.dia ,this.$store.getters.fecha, 
      " Horario: ", this.$store.getters.pelicula.horario,
      /* " Butacas: ", this.$store.getters.butacas, */
      " Combos: ", JSON.stringify(this.$store.getters.combos).replace('[','').replace(']',''),
      " Total Combo: $", this.$store.getters.precioTotalcombos],
      butaca: []
    }
   

  },
  components: {
    VueQrcode,
    /* QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture */
  },
  methods: {
    butacas() {
      
      for (let index = 0; index < this.$store.getters.butacas.length; index++) {
          this.butaca.push(this.$store.getters.butacas[index].fila, this.$store.getters.butacas[index].columna);
      }
      return this.butaca;
    }
  },
}
/* function guardarButacas(butacas)
      {
        let butacasFila='';
        console.log("guardar Butacas "+butacasFila.length)
        for (var i =0;i<butacas.length;i++)
        {
            butacasFila=butacas[i].fila
            console.log(butacasFila)
        }
        return butacasFila;
      } */
</script>