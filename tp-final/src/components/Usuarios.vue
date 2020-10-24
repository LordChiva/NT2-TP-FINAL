<template>
    
    <div class="header">
        <ul>
           
               <table>
               <tr>
                   <td v-for="(pelicula,index) in peliculas" :key="index">
                       <div>
                        <img alt="Peli foto"  v-bind:src="pelicula.imagen"  class="img-responsive" height="170" width="190"/>
                       </div>
                   </td>

               </tr>
               <!--  <hr>
                <h1>{{pelicula.nombre}} </h1> 
                <hr>
                <h1>{{pelicula.sinopsis}} </h1> -->
                
                

                </table>
                

            
        </ul>
        

    
        
        
    </div>

</template>

<script>

/*
<app-item :title="pelicula.nombre" :sub="pelicula.sinopsis" ></app-item>
*/
import starwars from "../assets/starWars.jpg"
import reyleon from "../assets/reyLeon.jpg"
import elorigen from "../assets/elOrigen.jpg"

export default {
    name:"AppHeader",
    props:{
        titulo:Number
    },
    data: () => {
        return{
            peliculas:[
            {nombre: "El Rey León",
            sinopsis: "Trata del Reinado de Mufasa el Rey León en una selva de Africa que gobierna con justicia en su territorio,con su leona Sarabi tienen un pequeño cachorro llamado Simba, siempre libra una batalla con su hermano Scar quien no podrá ser rey más aún con el nacimiento de su sobrino.",
            duracion: "1h 29m",
            imagen:reyleon
             
            },
            {nombre: "El origen", 
            sinopsis: "Inception, también conocida como El origen en español, es una película de ciencia ficción que relata la historia de un grupo de ladrones que utilizan una máquina que invade los sueños para conquistar sus objetivos más audaces.",
            duracion: "2h 42m",
            imagen:elorigen 
            },
            {
            nombre: "Star Wars: Episodio IX", 
            sinopsis: "La Resistencia sobreviviente se enfrenta a la Primera Orden, y Rey, Finn, Poe y el resto de los héroes encararán nuevos retos y una batalla final con la sabiduría de las generaciones anteriores.",  
            duracion: "2h 22m", 
            imagen:starwars
            }

            ,]
            
            
            
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
