<template>
    <div class="contenedorSalaPelicula">
        <div class="contenedorSala">
            <!-- <div>
                <div class="numeros" v-for="(numero,i) in numeros" :key="'numeros'+i" >
                    {{numero}}
                </div> 
                <div class="letras" v-for="(letra,x) in letras" :key="'letras'+x" >	
                    {{letra}}
                </div>  
                <div class="asiento">
                    <td v-for="(asiento,p) in salas" :key="'asientos'+p">
                        queda buscar la manera de que funcione el click
                             y con el tema de vuex hacer que registre el lugar
                             que elegimos
                        <span :ref="'asiento'+asiento.id" @click="setearOcupado(asiento)" :id="asiento.id" >
                            <i class="fas fa-couch" :style="'color:'+asiento.color"></i>
                        </span>
                    </td>	
                </div>
            </div>  --> 
            <table >
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
                    <tr class="contenedorNum">
                        <td>A</td>
                    </tr>
                    <tr class="asiento">
                        <!-- <td>A</td> -->
                        <!-- <div class="asiento"> -->
                            <td v-for="(asiento,p) in salas" :key="'asientos'+p">
                                <span :ref="'asiento'+asiento.id" @click="setearOcupado(asiento)" :id="asiento.id" >
                                    <i class="fas fa-couch" :style="'color:'+asiento.color"></i>
                                </span>
                            </td>
                        <!-- </div> -->
                    </tr>
                    <tr class="contenedorNum">
                        <td>B</td>
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
            <img alt="Pantalla"  :src="pantalla.imagen"  class="imagenPantalla">
        </div>
        <b-input-group-append class="contenedorB">
            <b-button class="boton"><router-link :to="`/PantallaPelicula/${id}`">Volver</router-link></b-button>
            <b-button class="boton"><router-link to="/PantallaProductos">Siguiente</router-link></b-button>
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


/* var pepe = document.getElementsByClassName("fa-couch") */

export default {
    /**cambienle el name, cambienle el tipo de la prop. Esa prop esta para algo?
     *  el título devuelve un número? */
 name:"SalaCine",
    /* props:{
        titulo:Number
        
    },  */


    data ()  {
        return{
            id:this.$route.params.id, 
            butacasSeleccionadas:[],
            salas:  crearAsientos(),
            pantalla: {imagen:pantallaPng},
            numeros:[1,2,3,4,5,6,7,8,9,10],
            /* evento: {pepe}, */
            letras:[                    
                'A','B','C','D','E','F','G','H'
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
         /* var elemento =document.getElementById("asiento"+id)
                //hacer un boolean 
                console.log(elemento);
                console.log("Pepe")
                if(elemento.ocupado==false)
                {
                    elemento.ocupado=true
                    elemento.style.color="color: #DA4127;"
                }
                else
                {
                    elemento.style.color="color: #409EFF;" */
/*
        agregarAsiento(asiento)
        {
            var butacasSeleccionadas =[]
            butacasSeleccionadas.push(asiento)
            console.log('Agregadon '+butacasSeleccionadas)
            console.log('Contador '+butacasSeleccionadas.length)
            
        },
        */

        setearOcupado(asiento)
            {
                 console.log(this.$refs['asiento'+asiento.id])
                 console.log(asiento.id)
                 
             if(asiento.ocupado)
              {
                 asiento.ocupado=false 
                 /* asiento.color='blue' */
                 this.$refs['asiento'+asiento.id][0].children[0].style.color='#409EFF'
                 
              }
              else
              {
                  asiento.ocupado=true
                  /* asiento.color='red' */
                  this.$refs['asiento'+asiento.id][0].children[0].style.color='#DA4127'
                  
              }
              console.log(asiento.ocupado)
            /* this.$refs.asiento1.style.color='red' */
          
           
           /*  console.log(asiento) */

            } 
        
    }
    
}
 function crearAsientos ()
        {
            
            var asientos =[];
            var letras=['A','B','C','D','E','F','G','H'];
           
             var id=0;
                letras.forEach(letra => {
                    
                    for (var i =1;i<=10;i++)
                    {
                            asientos.push({id:id,ocupado:false,color:'#409EFF',fila:letra,columna:i});
                            id++;
                    }
                }); 
            

            
            console.log(asientos[79].fila)
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
    margin: 0px 10px 0px 10px;
}

.contenedorAsientos > td{
    grid-template-columns: repeat(10, 4%);
}

.tBodyContenedor {
    width: 100%;
    display: inline-grid;
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
    grid-template-columns: repeat(10, 9%);
    justify-content: center;
    margin: 0px 10px;
        
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
    height: 200px;
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