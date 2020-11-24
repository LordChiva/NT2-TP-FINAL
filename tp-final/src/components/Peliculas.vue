<template>    
    <div class="contenedorPeliculas">       
        <table class="tableContainer">
            <tr>
                <td v-for="(pelicula,peliP) in peliculas" :key="'peliculasPrim'+peliP">
                    <div class="carta">
                        <div class="lado">
                            <img alt="Peli foto"  v-bind:src="pelicula.imagen" class="imagen">						
                        </div>  
                        <router-link  :to="`/PantallaPelicula/${pelicula.id}`">
                            <div class="lado atras" @click="peliculaSeleccionada(pelicula)">
                                <h3>{{pelicula.nombre}} </h3>	
                                <small>{{pelicula.sinopsis}} </small>	
                                <hr>                                
                                <small> Duracion: {{pelicula.duracion}} </small>   
                            </div>
                        </router-link>
                    </div>
                </td>
            </tr>            
        </table>  
        <Publicidad />
    </div>
    <!-- <router-link to="/"></router-link> -->
    
</template> 

<script>
/*
<app-item :title="pelicula.nombre" :sub="pelicula.sinopsis" ></app-item>
*/
import Publicidad from "../components/Publicidad.vue"
import starwars from "../assets/starWars.jpg"
import reyleon from "../assets/reyLeon.jpg"
import elorigen from "../assets/elOrigen.jpg"
import avatar from "../assets/avatar.jpg"
import jumanji from "../assets/Jumanji.jpg"
import ryf7 from "../assets/RyF7.jpg"
import wwz from "../assets/WorldWarZ.jpg"
import deadpool from "../assets/deadpool.jpg"
import jurassicWorld from "../assets/jurassicWorld.jpg"


export default {
    name:"peliculas",
    components: {
        Publicidad
    },
    mounted() {
        //console.log("mounted")
        this.peliculas = this.getPeliculas()
    },
    data: () => {
        return{
            peliculas: []
        }
    },
    methods: {
         peliculaSeleccionada (pelicula) {  
           this.$store.state.pelicula=pelicula;           
           this.$store.dispatch('agregarPelicula',pelicula);
        },
        getPeliculas() {
            const peliculas = [
            {id: 1,
            nombre: "El Rey León",
            sinopsis: "Trata del Reinado de Mufasa el Rey León en una selva de Africa que gobierna con justicia en su territorio,con su leona Sarabi tienen un pequeño cachorro llamado Simba, siempre libra una batalla con su hermano Scar quien no podrá ser rey más aún con el nacimiento de su sobrino.",
            duracion: "1h 29m",
            imagen:reyleon,
            horario: "20:00hs",
            dia:"Sabado",
            fechas:[
                {                
                fecha:" 07/11/2020",
                fecha2:" 14/11/2020",
                fecha3:" 21/11/2020",
                fecha4:" 28/11/2020"
                }
            ]             
            },

            {id: 2,
            nombre: "El origen", 
            sinopsis: "Inception, también conocida como El origen en español, es una película de ciencia ficción que relata la historia de un grupo de ladrones que utilizan una máquina que invade los sueños para conquistar sus objetivos más audaces.",
            duracion: "2h 42m",
            imagen:elorigen, 
            horario: "14:00hs",
            dia:"Lunes",
            fechas:[
                {
                fecha:" 02/11/2020",
                fecha2:" 09/11/2020",
                fecha3:" 16/11/2020",
                fecha4:" 23/11/2020"
                }
            ]
            },

            {id: 3,
            nombre: "Star Wars: Episodio IX", 
            sinopsis: "La Resistencia sobreviviente se enfrenta a la Primera Orden, y Rey, Finn, Poe y el resto de los héroes encararán nuevos retos y una batalla final con la sabiduría de las generaciones anteriores.",  
            duracion: "2h 22m", 
            imagen:starwars,
            horario: "19:00hs",
            dia:"Jueves",
            fechas:[
                {                
                fecha:" 05/11/2020",
                fecha2:" 12/11/2020",
                fecha3:" 19/11/2020",
                fecha4:" 26/11/2020"
                }
            ]
            },

            {id: 4,
            nombre: "Avatar",
            sinopsis: "Jake Sully es un ex-marine confinado en una silla de ruedas que, a pesar de su cuerpo tullido, todavía es un guerrero de corazón. Jake ha sido reclutado para viajar a Pandora, donde las corporaciones están extrayendo un mineral extraño que es la clave para resolver los problemas de la crisis energética de la Tierra.",
            duracion: "2h 42m",
            imagen:avatar,
            horario: "01:00hs" ,
            dia:"Martes",             
            fechas:[                
                {                
                fecha:" 03/11/2020",
                fecha2:" 10/11/2020",
                fecha3:" 17/11/2020",
                fecha4:" 24/11/2020"
                }
            ]
            },

            {id: 5,
                nombre:"Jumanji",
                sinopsis:"Spencer regresa al fantástico mundo de Jumanji. Sus amigos, Martha, Fridge y Bethany vuelven a entrar al juego para llevarlo de vuelta a casa, pero todo sobre Jumanji está a punto de cambiar, ya que descubren más obstáculos y peligros que superar.",
                duracion: "2h 3m",
                imagen:jumanji,
                horario: "12:00hs",
                dia:"Miercoles",
                fechas:[
                {                
                fecha:" 04/11/2020",
                fecha2:" 11/11/2020",
                fecha3:" 18/11/2020",
                fecha4:" 25/11/2020"
                }
            ]
            },
            
            {id: 6,
                nombre:"Rapidos y Furiosos",
                sinopsis:"Ha pasado un año desde que Dominic y Brian fueron indultados y pudieron regresar a Estados Unidos. Aunque desean adaptarse a su nueva vida dentro de la legalidad, las cosas no son tan fáciles. Además, un asesino británico va a entrar en sus vidas.",
                duracion: "2h 20m",
                imagen:ryf7,
                horario: "17:30hs",
                dia:"Viernes",
                fechas:[
                {                
                fecha:" 06/11/2020",
                fecha2:" 13/11/2020",
                fecha3:" 20/11/2020",
                fecha4:" 27/11/2020"
                }
            ]
            },

            {id: 7,
                nombre:"Guerra Mundial Z",
                sinopsis:"Gerry Lane (Brad Pitt), antiguo trabajador de las Naciones Unidas, está en el coche con su familia, en Filadelfia, cuando de repente se desata el caos en la ciudad. Gerry ve cómo las personas saltan unas sobre otras, y ocurre algo que lo deja atónito: las personas se están mordiendo unas a otras y desarrollan una gran violencia",
                duracion: "1h 56m",
                imagen:wwz,
                horario: "14:30hs",
                dia:"Sabado",
                fechas:[
                {                
                fecha:" 07/11/2020",
                fecha2:" 14/11/2020",
                fecha3:" 21/11/2020",
                fecha4:" 28/11/2020"
                }
            ]
            },
            
            {id: 8,
                nombre:"Deadpool",
                sinopsis:"Este personaje es un antihéroe o antisistema que se diferencia de otros superhéroes de las historietas. El nombre del personaje Deadpool deriva de la unión de dos palabras en inglés. Por un lado Dead que es muerto y Pool que es pozo o masacre; por lo que la traducción de Deadpool en español es Masacre o Pozo de muerte.",
                duracion: "1h 49m",
                imagen:deadpool,
                horario: "14:30hs",
                dia:"Domingo",
                fechas:[
                {                                        
                    fecha:" 01/11/2020",
                    fecha2:" 08/11/2020",
                    fecha3:" 15/11/2020",
                    fecha4:" 22/11/2020"
                }
                ]
            },
            
            {id: 9,
                nombre:"Jurassic World",
                sinopsis:"Ambientada 22 años después de los acontecimientos de Parque Jurásico, Jurassic World tiene lugar en la misma isla ficticia centroamericana de isla Nublar, frente a la costa del Pacífico de Costa Rica, donde un nuevo parque temático poblado con dinosaurios clonados ha operado durante diez años.",
                duracion: "2h 4m",
                imagen:jurassicWorld,
                horario: "14:30hs",
                dia:"Domingo",
                fechas:[
                {                    
                    fecha:" 08/11/2020",
                    fecha2:" 15/11/2020",
                    fecha3:" 22/11/2020",
                    fecha4:" 29/11/2020"
                }
                ]
            }             
        ]
        return peliculas
        }
    }
}
</script>

<style>
.contenedorPeliculas{
    display: inline-block;
    width: 91%;
    height: 100%;
    margin: 0px;
    padding: 15px;
}

.contenedorPeliculas > table > tr {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 37%);
    grid-auto-rows: 350px 350px;
    justify-content: center;
    margin: 0px 0px 0px 100px;
    
}

.tableContainer{
    width: 100%;
    justify-content: center;
    display: inline-flex;
}

.contenedor {
    height: 300px;
    width: 300px;
    margin: 5px 25px 5px 25px;
}

.carta {
    height: 300px;
    width: 300px;
    position: relative;
    transform-style: preserve-3d;
    transition: 0.7s;
    box-shadow: 0px 0px 5px black;
}
/**120deg */
.carta:hover {
    transform: rotateY(170deg);
}

.imagen{
    width: 300px;
    height: 300px;
}

.lado {
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    position: absolute;  
    background-color: rgb(21, 34, 50);
    color: #9FADBD;     
}

.atras {
    transform: rotateY(200deg);
}
</style>
