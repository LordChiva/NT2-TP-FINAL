<template>    
    <div class="header">       
        <table class="container-table">            
            <tr class="tr">        
                <div class="numeros" v-for="(numero,index) in numeros" :key="index" >	
                    {{numero.numero}}
                </div>    
                <td class="td" v-for="(sala,index) in salas" :key="index"> 
                    <div class="contenedor">                                                                        
                        <img v-bind:src="sala.imagen"  class="img-responsive" height="50" width="50">	
                    </div>                                                       
                </td>                     
            </tr>                    
        </table>   
        <div class="pantalla" v-for="(pantalla,index) in pantalla" :key="index" >	
            <img alt="Pantalla"  v-bind:src="pantalla.imagen"  class="img-responsive" height="80" width="1000">
        </div>   
        
        <div class="letras" v-for="(letra,index) in letras" :key="index" >	
            {{letra.letra}}
        </div>  
    </div>    
</template>

<script>
/*
<app-item :title="pelicula.nombre" :sub="pelicula.sinopsis" ></app-item>
*/
import asientoLibre from "../assets/asientoLibre.jpg"
//import asientoOcupado from "../assets/asientoOcupado.jpg"
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
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip },
                {imagen:asientoVip }, 
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre }, 
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre }, 
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
                {imagen:asientoLibre },
            ],
            pantalla: [{imagen:pantalla } ],
            numeros:[          
                {numero:1 },
                {numero:2 },
                {numero:3 },
                {numero:4 },
                {numero:5 },
                {numero:6 },
                {numero:7 },
                {numero:8 },
                {numero:9 },
                {numero:10 },
                {numero:11 },
                {numero:12 },
                {numero:13 },
                {numero:14 },
                {numero:15 },
                {numero:16 },
                {numero:17 },
                {numero:18 },
                {numero:19 },
                {numero:20 },
            ],
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