<template>    
    <div class="header">       
        <table class="container-table">            
            <tr class="tr">        
                <div class="numeros" v-for="(numero,index) in numeros" :key="index" >	
                
                        {{numero}}
                    
                </div>    
                <td class="td" v-for="(asiento,index) in salas" :key="index"> 
                <div class="contenedor" >     
                        <!--AGREGAR AUNQUE SEA VALOR TEMPORAL AL HEIGHT Y WIDTH CON px O %-->                                                                   
                        <img v-bind:src="asiento.Imagen"  class="img-responsive" height="50" width="50" v-on:click="setearOcupado(asiento)" >	
                    </div>                                                       
                </td>                     
            </tr>
            <div class="pantalla" >	
                <!--AGREGAR AUNQUE SEA VALOR TEMPORAL AL HEIGHT Y WIDTH CON px O % y medio dudoso ese width="1000"-->
                <img alt="Pantalla"  v-bind:src="pantalla.imagen"  class="img-responsive" height="80" width="1000">
            </div>  
                             
        </table> 
        <div class="letras" v-for="(letra,index) in letras" :key="index" >	
            {{letra.letra}}
        </div>  

        <div>
            <b-button > <router-link to="/PantallaProductos">Siguiente</router-link></b-button>	
        </div>
        <div>
            
        <b-button><router-link :to="`/PantallaPelicula/${id}`">Volver</router-link></b-button> 
        </div>
        
         
        
        
    </div>    
</template>

<script>
/*
<app-item :title="pelicula.nombre" :sub="pelicula.sinopsis" ></app-item>
*/
/* import asientoNodisp from "../assets/asientoNodisp.jpg" */
import asientoOcupado from "../assets/asientoOcupado.jpg"
import asientoLibre from "../assets/asientoLibre.jpg"
import pantalla from "../assets/pantalla.jpg"

export default {
    /**cambienle el name, cambienle el tipo de la prop. Esa prop esta para algo?
     *  el título devuelve un número? */
    name:"SalaCine",
    props:{
        titulo:Number
    },
   
   
    

/** HACER UN MAXIMO DE 120 BUTACAS - Y HACER UN CICLO PARA QUE REPITA LAS BUTACAS, ¡¡NO HACER 120 VECES UNA BUTACA!! */

    data ()  {
        return{
            id:this.$route.params.id, 
            
           
            salas:  crearAsientos(asientoLibre),

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
        /**OPERAR TÍTULO DEVUELVE EL TÍTULO MÁS UN VALOR NUMERICO SUPONGO, VAYA UNO A SABER PARA QUÉ*/
        operarTitulo()
        {
            return this.titulo + this.valor
        },

         setearOcupado(asiento)
        {
            
            if(asiento.Imagen==asientoOcupado)
            {
                asiento.Imagen=asientoLibre
            }
            else
            {
                asiento.Imagen=asientoOcupado
            }
             
             
            
            
        }, 
        
    }
    
}
 function crearAsientos (imagen)
        {
            var asientos =[];
            for (var i =0;i<=50;i++)
            {
                asientos.push({Imagen:imagen, id:i});
            }
            return asientos;
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
        width:50;
        height:50;
        
    }


    .pantalla {
        margin: 5px -50px;
    }
</style>