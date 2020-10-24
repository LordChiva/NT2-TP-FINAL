<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<template>

  <div class="peliculas-item">
    <ol>     
        <li v-for="peliculas in peliculaBuscadas" :key="peliculas.nombre">
            <span>{{ `La pelicula ${peliculas.nombre} (${peliculas.duracion})`}} </span>
            <hr>
             
            <span>{{ ` ${peliculas.sinopsis} `}} </span>
            <hr>
        </li>
    </ol>    
  </div>
</template>


<script>
   export default {
            name: 'peliculas-item',
            props: {
               buscar:null, 
                    form:{
                        nombre:' ', 
                        sinopsis:' ',
                        imagen:' ',  
                        duracion: "1h 02m",                             
                    },
                    peliculas:[]  

            },
            methods:{
                
            },
            computed: {
                peliculaBuscadas(){
                    return this.peliculas.filter(peliculas=> this.buscar == null || peliculas.nombre.includes(this.buscar))
                }
            },           
            created() {
               const peliculas = [
                   { nombre: "El Rey León", sinopsis: "Trata del Reinado de Mufasa el Rey León en una selva de Africa que gobierna con justicia en su territorio,con su leona Sarabi tienen un pequeño cachorro llamado Simba, siempre libra una batalla con su hermano Scar quien no podrá ser rey más aún con el nacimiento de su sobrino.",  duracion: "1h 29m" },
                   { nombre: "Star Wars: Episodio IX", sinopsis: "La Resistencia sobreviviente se enfrenta a la Primera Orden, y Rey, Finn, Poe y el resto de los héroes encararán nuevos retos y una batalla final con la sabiduría de las generaciones anteriores.",  duracion: "2h 22m", imagen:"./assets/starWars.jpg"},
                   { nombre: "Avatar", sinopsis: "Jake Sully es un ex-marine confinado en una silla de ruedas que, a pesar de su cuerpo tullido, todavía es un guerrero de corazón. Jake ha sido reclutado para viajar a Pandora, donde las corporaciones están extrayendo un mineral extraño que es la clave para resolver los problemas de la crisis energética de la Tierra.", duracion: "2h 42m" },
                   { nombre: "El origen", sinopsis: "Inception, también conocida como El origen en español, es una película de ciencia ficción que relata la historia de un grupo de ladrones que utilizan una máquina que invade los sueños para conquistar sus objetivos más audaces.",  duracion: "2h 42m" },            
                ]
                this.peliculas = peliculas
            }    
        }
    
    
</script>
    