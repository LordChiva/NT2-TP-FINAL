<template>
    <div class="contenedorSalaPelicula">
        <div class="contenedorSala">
            <!-- <div>
                <div class="numeros" v-for="(numero,index) in numeros" :key="index" >
                    {{numero}}
                </div> 
                <div class="letras" v-for="(letra,index) in letras" :key="index" >	
                    {{letra.letra}}
                </div>  
                <div class="asiento">
                    <td v-for="(asiento,index) in salas" :key="index">
                         queda buscar la manera de que funcione el click
                             y con el tema de vuex hacer que registre el lugar
                             que elegimos -->
                       <!--  <i class="fas fa-couch" @click="setearOcupado()"></i>
                    </td>	
                </div>
            </div>  -->
            <table>
                <tbody class="tBodyContenedor">
                    <tr class="contenedorNum">
                        <td> | </td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                    </tr>
                    <!-- <tr>
                        <td>A</td>
                        <td><i class="fas fa-couch"></i></td>
                        <td><i class="fas fa-couch"></i></td>
                        <td><i class="fas fa-couch"></i></td>
                        <td><i class="fas fa-couch"></i></td>
                        <td><i class="fas fa-couch"></i></td>
                        <td><i class="fas fa-couch"></i></td>
                        <td><i class="fas fa-couch"></i></td>
                        <td><i class="fas fa-couch"></i></td>
                        <td><i class="fas fa-couch"></i></td>
                        <td><i class="fas fa-couch"></i></td>
                    </tr> -->
                    <tr class="contenedorAsientos">
                        <td>A</td>
                        <td v-for="(asiento,index) in salas" :key="index">
                            <i class="fas fa-couch" @click="setearOcupado()"></i>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
        <!-- <div class="asiento">
                            <td v-for="(asiento,index) in salas" :key="index">
                                 queda buscar la manera de que funcione el click
                                    y con el tema de vuex hacer que registre el lugar
                                    que elegimos
                            <i class="fas fa-couch" @click="setearOcupado()"></i>
                            </td>	
                        </div> -->


        <div class="pantalla">
            <img alt="Pantalla"  v-bind:src="pantalla.imagen"  class="imagenPantalla">
        </div>
        <b-input-group-append class="contenedorB">
            <b-button class="boton"> <router-link to="/PantallaPelicula">Volver</router-link></b-button>	
            <b-button class="boton"> <router-link to="/PantallaProductos">Siguiente</router-link></b-button>
        </b-input-group-append>
    </div>
    <!--    <i class="fas fa-couch" style="color: #DA4127;"></i>
            <font-awesome-icon :icon="['fas', 'couch']"/>
            <div class="contenedorAsiento">
                <td v-for="(asiento,index) in salas" :key="index">                                                                 
                    <img v-bind:src="asiento.Imagen"  class="imagen" v-on:click="setearOcupado(asiento)" >
                </td>	
            </div> 
          -->  
</template>

<script>
import pantallaPng from "../assets/pantallaPng.png"


var pepe = document.getElementsByClassName("fa-couch")

export default {
   /*  name:"SalaCine",
    props:{
        titulo:Number
        
    }, */


    data: () => {
        return{
            salas:  crearAsientos(),
            pantalla: {imagen:pantallaPng},
            /* numeros:[1,2,3,4,5,6,7,8,9,10], */
            evento: {pepe},
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
       /*  $(".fa-couch").click(function(){
            $(this).toggleClass("btn-danger btn-success");
        }) */

        /* setearOcupado: function(elmnt,clr) {
            if(clr=='red'){
                elmnt.style.color = clr;
            }
            if(!(clr=='red')){
                elmnt.style.color = 'red';
            }
        } */

        setearOcupado()
            {
                
                if(this.evento.style.color=="color: #409EFF")
                {
                    this.evento.style.color="color: #DA4127;"
                }
                else
                {
                    this.evento.style.color="color: #409EFF;"
                }        
            } 
        
    }
    
}
 function crearAsientos ()
        {
            var asientos =[];
            for (var i =0;i<50;i++)
            {
                asientos.push({id:i});
            }
            return asientos;
        }

</script>


<style>
td {
    color: white;
}

.contenedorSalaPelicula {
    display: inline-block;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
}

.contenedorSala {
    display: inline-block;
    width: 100%;
}

.contenedorNum > td {
    margin: 0px 5px 0px 5px;
}

.contenedorAsientos > td{
    grid-template-columns: repeat(10, 4%);
}

.tBodyContenedor {
    width: 70%;
    display: inline-block;
}

.numeros {
    display: inline-block;
}

.letras {
    display: inline-flex;
    justify-content: start;
}

.asiento {
    width: 100%;
    display: inline-grid;
    grid-template-columns: repeat(10, 4%);
    justify-content: center;
    margin: 15px;      
}

.asiento > td {
    display: inline-flex;
    justify-content: center;
}

.fa-couch {
    border: 1px solid rgba(21, 34, 50, 0.7);
    border-radius: 10px;
    /* margin: 0px 50px 0px 50px; */
    width: 100%;
    color: #409EFF;
}

.fa-couch:hover {
    color: #54D0FF;
    cursor: pointer;
}

a {
    color: #9FADBD;
    text-decoration: none;
}

a :hover {
    text-decoration: none;
}

#nav a {
  font-weight: bold;
  color: #9FADBD;
  text-decoration: none;
}

.pantalla {
    display: inline-block;
    width: 100%;
}

.imagenPantalla {
    width: 600px;
    height: 400px;
}

.contenedorB{
    padding: 20px;
    display: inline-flex;
    justify-content: center;
}

.boton {
    padding: 5px;
    border: 1px solid rgba(21, 34, 50, 0.7);
    border-radius: 10px;
    margin: 0px 50px 0px 50px;
    width: 100px;
    color: #9FADBD;
    background-color: rgb(21, 34, 50, 0.3);
    font-weight: bold;
}

.boton :hover{ 
    color: #C7D5E5;
    background-color: none;
}
</style>