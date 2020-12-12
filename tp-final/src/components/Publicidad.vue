<template>
  <!--<img src="../assets/promocion.jpg">-->
  <div class="contenedorCarrusel">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="420"
      img-height="280"
    > 
      <b-carousel-slide
        caption="$380"
        img-src="https://i.imgur.com/LjNrqoo.png"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="$460"
        img-src="https://i.imgur.com/oKVazEt.png"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="$700"
        img-src="https://i.imgur.com/dy7aucx.png"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style scoped>
.contenedorCarrusel {
  width: 30%;
  justify-content: center;
  display: inline-block;
  margin: 0px 0px 20px 0px;
  background-color: #111E2E;
  border: 2px solid rgba(21, 34, 50, 0.7);
  border-radius: 10px;
}
</style>