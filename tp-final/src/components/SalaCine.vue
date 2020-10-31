<template>    
    <div class="header">       
        <table class="container-table">            
            <tr class="tr">        
                <div class="numeros" v-for="(numero,index) in numeros" :key="index" >	
                
                        {{numero}}
                    
                </div>    
                <td class="td" v-for="i in 160" :key="i"> 
                <div class="contenedor">                                                                        
                        <img v-bind:src="salas[0]"  class="img-responsive" height="50" width="50">	
                    </div>                                                       
                </td>                     
            </tr>
        <div class="pantalla" >	
            <img alt="Pantalla"  v-bind:src="pantalla.imagen"  class="img-responsive" height="80" width="1000">
        </div>                       
        </table> 
        
         
        
        <div class="letras" v-for="(letra,index) in letras" :key="index" >	
            {{letra.letra}}
        </div>  
    </div>    
</template>

<script>
/*
<app-item :title="pelicula.nombre" :sub="pelicula.sinopsis" ></app-item>
*/
/* import asientoLibre from "../assets/asientoLibre.jpg" */
/* import asientoOcupado from "../assets/asientoOcupado.jpg" */
import asientoVip from "../assets/asientoVip.jpg"
import pantalla from "../assets/pantalla.jpg"

export default {
    name:"AppHeader",
    props:{
        titulo:Number
    },

/** HACER UN MAXIMO DE 120 BUTACAS - Y HACER UN CICLO PARA QUE REPITA LAS BUTACAS, ¡¡NO HACER 120 VECES UNA BUTACA!! */

    data: () => {
        return{
            salas:[  
                asientoVip 
            ],

            pantalla: {imagen:pantalla },
            numeros:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],

            letras:[                    
                {letra:"A" },
                {letra:"B" },
                {letra:"C" },
                {letra:"D" },
                {letra:"E" },
                {letra:"F" },
                {letra:"G" },
                {letra:"H" }
            ]
        }        
    },
    methods: {
        operarTitulo()
        {
            return this.titulo + this.valor
        }
       /*  setearImagen(asiento)
        {
            if asiento.imagen==asientoLibre
            return
        } */
    }
    
}

</script>


<style>
    .tr {
        width: 90%;
        background: white;
        display: grid;
        grid-template-columns: repeat(20, 5%);        
    }

    .header {
        margin: 0px 500px;
    }      

    .contenedor {
        position: relative;
        
    }

    .contenedor:hover {
       box-shadow: 2px 2px 50px blue;
    }

    .pantalla {
        margin: 5px -50px;
    }
</style>