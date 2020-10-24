<template>
    
    <div class="header">
        <ul>
            <li class ="list-group-item" v-for="(pelicula,index) in peliculas" :key="index">
                <div>
                <hr>
                <h1>{{pelicula.nombre}} </h1>
                <hr>
                <h1>{{pelicula.sinopsis}} </h1>

                <img :src="'images'+ pelicula.imagen" class="img-responsive" 
            height="70" width="90">

                </div>

            </li>
        </ul>
        

    
        
        
    </div>

</template>

<script>

/*
<app-item :title="pelicula.nombre" :sub="pelicula.sinopsis" ></app-item>
*/
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
            imagen:"./assets/starWars.jpg"
             
            },
            {nombre: "El origen", 
            sinopsis: "Inception, también conocida como El origen en español, es una película de ciencia ficción que relata la historia de un grupo de ladrones que utilizan una máquina que invade los sueños para conquistar sus objetivos más audaces.",
              duracion: "2h 42m"}
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
