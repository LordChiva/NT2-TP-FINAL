<template>
<div>
  <vue-qrcode :value="compra" />
</div>
</template>
<script>
import VueQrcode from 'vue-qrcode'
/* import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader' */
 
export default {
  data() {
    return {
      compra: [
      "Pelicula: ", this.$store.getters.pelicula.nombre, 
      " Dia: ", this.$store.getters.pelicula.dia ,this.$store.getters.fecha, 
      " Horario: ", this.$store.getters.pelicula.horario,
      " Butacas: ", this.butacas(),
      " Combos: ", this.combos(),
      " Total Combo: $", JSON.stringify(this.$store.getters.precioTotalcombos).replace('[','').replace(']','')],
      combo: null,
      butaca: null
    }
   

  },
  mounted()
  {
console.log("QR")
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