<template>
  <!--<img src="../assets/promocion.jpg">-->
  <div class="contenedorCarrusel">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        caption=" "
        img-src="https://picsum.photos/1024/480/?image=10"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=" "
        img-src="https://picsum.photos/1024/480/?image=12"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=" "
        img-src="https://picsum.photos/1024/480/?image=22"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style scoped>
.contenedorCarrusel {
  width: 55%;
  justify-content: center;
  display: inline-block;
  margin: 0px 0px 20px 0px;
  background-color: #111E2E;
  border: 2px solid rgba(21, 34, 50, 0.7);
  border-radius: 10px;
}
</style>