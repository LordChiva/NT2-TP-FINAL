<template>
<div>
  <vue-qrcode :value="$store.getters.pelicula.nombre" />
  <h1>Hola QR</h1>
  </div>
</template>
<script>
import VueQrcode from 'vue-qrcode'
/* import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader' */
 
export default {
  components: {
    VueQrcode,
    /* QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture */
  },
}
</script>