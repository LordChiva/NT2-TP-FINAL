<template>
  <div id="c-silder">
      <div id="silder">
          <ul>
              <li> <img src="../assets/promocion.jpg"></li>
              <li> <img src="../assets/promocion.jpg"></li>
              <li> <img src="../assets/promocion.jpg"></li>
              <li> <img src="../assets/promocion.jpg"></li>
          </ul>
      </div>  
  </div>


  <!-- <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    > -->
      <!-- Text slides with image -->
      <!-- <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide> -->

      <!-- Slides with custom text -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>
 -->
      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
     <!--  <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel> -->

   <!--  <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div> -->
</template>

<script>
 /*  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  } */
</script>

<!--CONFIGURACION SIN SOBREPASAR 100% O QUE NO ESTE POR DEBAJO DEL 0% -- USAR px PARA ALGUNOS ELEMENTOS-->

<style scoped>
    /* * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        min-height: 100vh;
        background-color: rgb(11, 22, 34);
    }

    #c-silder {
        margin: auto;
        width: 85%;
        max-width: 900px;
        max-width: relative;
        overflow: hidden;
    }

    #silder {
        margin: auto;
        width: 95%;
        overflow: hidden;
    }

    #silder ul {
        display: flex;
        padding: 0;
        width: 400%;
        
        animation: cambio 20s infinite alternate;
    }

    #silder li {
        width: 100%;
        list-style: none;
    }

    #silder img {
        display: block;
        width: 100%;
        height: 100%;
    }

    @keyframes cambio {
        0% { margin-left: 0; }
        20% { margin-left: 0; }

        25% { margin-left: -100%; }
        45% { margin-left: -100%; }

        50% { margin-left: -200%; }
        70% { margin-left: -200%; }

        75% { margin-left: -300%; }
        100% { margin-left: -300%; }
    } */
    
</style>