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
</template>

<!--CONFIGURACION SIN SOBREPASAR 100% O QUE NO ESTE POR DEBAJO DEL 0% -- USAR px PARA ALGUNOS ELEMENTOS-->

<style scoped>
    * {
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
    }
    
</style>