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
        pepe:'',
        /* butacas:this.$store.getters.butacas, */
       compra: (["Pelicula: ", this.$store.getters.pelicula.nombre, 
       " Dia: ", this.$store.getters.pelicula.dia ,this.$store.getters.fecha, 
       "Horario: ", this.$store.getters.pelicula.horario, 
       /* " Butacas: ", guardarButacas(this.butacas), */
      " Combos: ", JSON.stringify(this.$store.getters.combos).replace('[','').replace(']','')]),
      

    }
   

  },
  methods:
  {

      
  },
  components: {
    VueQrcode,
    /* QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture */
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