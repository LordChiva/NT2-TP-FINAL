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
      compra: ["Pelicula: ", this.$store.getters.pelicula.nombre, 
      " Dia: ", this.$store.getters.pelicula.dia ,this.$store.getters.fecha, 
      " Horario: ", this.$store.getters.pelicula.horario,
      " Butacas: ", this.$store.getters.butacas,
      " Combos: ", this.$store.getters.combos],
    }
  },
  components: {
    VueQrcode,
    /* QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture */
  },
}
</script>