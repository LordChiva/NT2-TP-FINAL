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
               <!-- CLASE 7
                    2:20:00 EN ADELANTE
                    COMO USAR EL ROUTE PARA TENER Y DIFERENCIAR
                    DIFERENTES USUARIOS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    
                    también pensaba en que si se puede usar de la manera en la que muestra en la clase,
                    hacer un slide con los diferentes usuarios pre-cargados. -->
                
                

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
import avatar from "../assets/avatar.jpg"
import jumanji from "../assets/Jumanji.jpg"
import ryf7 from "../assets/RyF7.jpg"
import wwz from "../assets/WorldWarZ.jpg"

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
            imagen:reyleon,
            horario: "20:00hs",
            dias:[
                {
                dia:"Sabado",
                fecha:" 17/10/2020",
                fecha2:" 24/10/2020",
                fecha3:" 31/10/2020",
                fecha4:" 01/11/2020"
                }

            ]
             
            },
            {nombre: "El origen", 
            sinopsis: "Inception, también conocida como El origen en español, es una película de ciencia ficción que relata la historia de un grupo de ladrones que utilizan una máquina que invade los sueños para conquistar sus objetivos más audaces.",
            duracion: "2h 42m",
            imagen:elorigen, 
            horario: "14:00hs",
             dias:[
                {
                dia:"Lunes",
                fecha:" 17/10/2020",
                fecha2:" 24/10/2020",
                fecha3:" 31/10/2020",
                fecha4:" 01/11/2020"
                }

            ]

            },
            {
            nombre: "Star Wars: Episodio IX", 
            sinopsis: "La Resistencia sobreviviente se enfrenta a la Primera Orden, y Rey, Finn, Poe y el resto de los héroes encararán nuevos retos y una batalla final con la sabiduría de las generaciones anteriores.",  
            duracion: "2h 22m", 
            imagen:starwars,
            horario: "19:00hs",
             dias:[
                {
                dia:"Jueves",
                fecha:" 17/10/2020",
                fecha2:" 24/10/2020",
                fecha3:" 31/10/2020",
                fecha4:" 01/11/2020"
                }

            ]
            },

           { nombre: "Avatar",
             sinopsis: "Jake Sully es un ex-marine confinado en una silla de ruedas que, a pesar de su cuerpo tullido, todavía es un guerrero de corazón. Jake ha sido reclutado para viajar a Pandora, donde las corporaciones están extrayendo un mineral extraño que es la clave para resolver los problemas de la crisis energética de la Tierra.",
             duracion: "2h 42m",
             imagen:avatar,
             horario: "01:00hs" ,
              dias:[
                {
                dia:"Martes",
                fecha:" 17/10/2020",
                fecha2:" 24/10/2020",
                fecha3:" 31/10/2020",
                fecha4:" 01/11/2020"
                }

            ]
             },

             {
                 nombre:"Jumanji",
                 sinopsis:"Spencer regresa al fantástico mundo de Jumanji. Sus amigos, Martha, Fridge y Bethany vuelven a entrar al juego para llevarlo de vuelta a casa, pero todo sobre Jumanji está a punto de cambiar, ya que descubren más obstáculos y peligros que superar.",
                 duracion: "2h 3m",
                 imagen:jumanji,
                 horario: "12:00hs",
                  dias:[
                {
                dia:"Miercoles",
                fecha:" 17/10/2020",
                fecha2:" 24/10/2020",
                fecha3:" 31/10/2020",
                fecha4:" 01/11/2020"
                }

            ]

             },

             {
                 nombre:"Rapidos y Furiosos",
                 sinopsis:"Ha pasado un año desde que Dominic y Brian fueron indultados y pudieron regresar a Estados Unidos. Aunque desean adaptarse a su nueva vida dentro de la legalidad, las cosas no son tan fáciles. Además, un asesino británico va a entrar en sus vidas.",
                 duracion: "2h 20m",
                 imagen:ryf7,
                 horario: "17:30hs",
                  dias:[
                {
                dia:"Viernes",
                fecha:" 17/10/2020",
                fecha2:" 24/10/2020",
                fecha3:" 31/10/2020",
                fecha4:" 01/11/2020"
                }

            ]
             },
             {
                 nombre:"Guerra Mundial Z",
                 sinopsis:"Gerry Lane (Brad Pitt), antiguo trabajador de las Naciones Unidas, está en el coche con su familia, en Filadelfia, cuando de repente se desata el caos en la ciudad. Gerry ve cómo las personas saltan unas sobre otras, y ocurre algo que lo deja atónito: las personas se están mordiendo unas a otras y desarrollan una gran violencia",
                 duracion: "1h 56m",
                 imagen:wwz,
                 horario: "14:30hs",
                  dias:[
                {
                dia:"Sabado",
                fecha:" 17/10/2020",
                fecha2:" 24/10/2020",
                fecha3:" 31/10/2020",
                fecha4:" 01/11/2020"
                }

            ]
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
