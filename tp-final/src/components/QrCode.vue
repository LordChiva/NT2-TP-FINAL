<template>
  <vue-qrcode value="https://www.1stg.me" />
</template>
<script>
import VueQrcode from 'vue-qrcode'
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
 
export default {
  components: {
    VueQrcode,
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
  },
}
</script>