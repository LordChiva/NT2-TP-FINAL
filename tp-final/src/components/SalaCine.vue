<template>
    <div class="contenedorSalaPelicula">
        <div class="contenedorSala">
           <!--  <div>
                <div class="numeros" v-for="(numero,i) in numeros" :key="'numeros'+i" >
                    {{numero}}
                </div> 
                <div class="letras" v-for="(letra,x) in letras" :key="'letras'+x" >	
                    {{letra}}
                </div>  
                <div class="asiento">
                    <td v-for="(asiento,p) in salas" :key="'asientos'+p">
                        <span :ref="'asiento'+asiento.id" @click="setearOcupado(asiento)" :id="asiento.id" >
                            <i class="fas fa-couch" :style="'color:'+asiento.color"></i>
                        </span>
                    </td>	
                </div>
            </div> -->
            <div class="background">
                <table class="tabla">
                    <tbody class="tBodyContenedor">
                        <tr class="tituloSalaCine">
                            <td><h3>Selección de asientos</h3></td>
                        </tr>
                        <tr class="referencia">
                            <td><h5>Disponible: <i class="fas fa-couch" :style="'color: #409EFF'"></i></h5></td>
                            <td><h5>Seleccionado: <i class="fas fa-couch" :style="'color: #DA4127'"></i></h5></td>
                            <td><h5>Ocupado: <i class="fas fa-couch" :style="'color: #FFF1AA'"></i></h5></td>
                        </tr>
                        <tr class="contenedorNum">
                            <td><h6>1</h6></td>
                            <td><h6>2</h6></td>
                            <td><h6>3</h6></td>
                            <td><h6>4</h6></td>
                            <td><h6>5</h6></td>
                            <td><h6>6</h6></td>
                            <td><h6>7</h6></td>
                            <td><h6>8</h6></td>
                            <td><h6>9</h6></td>
                            <td><h6>10</h6></td>
                        </tr>
                        <tr>
                            <td class="asiento" v-for="(asiento,p) in salas" :key="'asientos'+ p">
                                <span :ref="'asiento' + asiento.id" @click="setearOcupado(asiento)" :id="asiento.id" >
                                    <i class="fas fa-couch" :style="'color:'+asiento.color"></i>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="pantalla">
                    <img alt="Pantalla"  :src="pantalla.imagen"  class="imagenPantalla">
                </div>
            </div>
        </div>
        <b-input-group-append class="contenedorB">
            <b-button class="boton" @click="pantallaPeliculaenNull()"><router-link :to="`/PantallaPelicula/${id}`">Volver</router-link></b-button>
            <div v-if="this.butacasSeleccionados.length > 0">
                <b-button class="boton" @click="asientoSeleccion(butacasSeleccionados)"><router-link to="/PantallaProductos">Siguiente</router-link></b-button>
            </div>  
            <div class="noSeleccionado" v-if="this.butacasSeleccionados.length == 0">
                <h3>Tiene que seleccionar una butaca para poder reservar la pelicula: {{this.$store.getters.pelicula.nombre}}</h3>
            </div>            
        </b-input-group-append>
    </div>
    <!-- <table>
                <tr v-for="fila in filas" :key="fila.fila">
                    <td>{{fila.fila}}</td>
                    <td v-for="(asiento, index) in fila.asientos" :key="index">
                    <td v-for="(asiento,p) in salas" :key="'asientos'+ p">
                        {{asiento.numero}}
                        <span :ref="'asiento' + asiento.id" @click="setearOcupado(asiento)" :id="asiento.id" >
                            <i class="fas fa-couch" :style="'color:'+asiento.color"></i>
                        </span>
                    </td>
                </tr>
            </table> -->

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

 name:"SalaCine",



    data ()  {
        return{
            id:this.$route.params.id, 
            butacasSeleccionados: [],
            salas:  crearAsientos(),
            pantalla: {imagen:pantallaPng},
            numeros:[1,2,3,4,5,6,7,8,9,10],
             filas : [
                { fila: "a", asientos: [{ numero: 1 }, { numero: 2 }, { numero: 3 }] },
                { fila: "b", asientos: [{ numero: 1 }, { numero: 2 }, { numero: 3 }] },
            ],

           

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

        setearOcupado(asiento) {
                console.log(this.$refs['asiento'+asiento.id])
                console.log(asiento.id)
                 
                if(asiento.ocupado)
                {
                    asiento.ocupado=false 
                    /* asiento.color='blue' */
                    this.$refs['asiento'+asiento.id][0].children[0].style.color='#409EFF'
                    this.butacasSeleccionados.pop(asiento);
                    
                }
                else
                {
                    asiento.ocupado=true
                    /* asiento.color='red' */
                    this.$refs['asiento'+asiento.id][0].children[0].style.color='#DA4127'
                    this.butacasSeleccionados.push(asiento);
                    
                }
                console.log(asiento.ocupado)
                /* this.$refs.asiento1.style.color='red' */
            
            
            /*  console.log(asiento) */

        },
        asientoSeleccion(butacasSeleccionados) {
                this.$store.state.butacas=butacasSeleccionados;           
                this.$store.dispatch('agregarButacas',butacasSeleccionados);
        },
        pantallaPeliculaenNull() {
                this.$store.state.fecha=null;           
                this.$store.dispatch('agregarFecha',null);
        }
        
    }
    
}
function crearAsientos () {    
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

.background {
    display: inline-block;
    width: 50%;
    margin: 30px 0px 30px;
    background-color: #111E2E;
    border: 2px solid rgba(21, 34, 50, 0.7);
    border-radius: 10px;
}

.tabla {
    display: inline-block;
    width: 100%;
    margin: 20px 0px 0px 0px;
}

.tBodyContenedor {
    width: 60%;
    display: inline-grid;
}

.tituloSalaCine {
    text-align: -webkit-center;
}

.tituloSalaCine > td > h3 {
  font-size: 27px;
  color: #C7D5E5;
}

.referencia {
    text-align: -webkit-center;
    width: max-content;
    margin: 10px 0px 10px 0px;
}

.referencia > td {
    padding: 0px 5px 0px 0px;
}

.referencia > td > h5 {
  font-size: 23px;
  color: #9FADBD;
}

.contenedorNum > td {
    width: 4%;
    margin: 0px 10px 0px 10px;
    padding: 0px 0px 0px 0px;
    text-align: end;
}

.contenedorNum > td > h6 {
  font-size: 17px;
  color: #9FADBD;
}

.asiento {
    width: 7%;
    display: inline-grid;
    grid-template-columns: repeat(10, 0%);
    justify-content: center;
    margin: 0px 6px; 
}

.asiento > td {
    display: inline-flex;
    justify-content: center;
    
}

.fa-couch {
    border: 1px solid rgba(21, 34, 50, 0.7);
    border-radius: 10px;
    width: 100%;
    color: #409EFF;
}

.fa-couch:hover {
    color: #54D0FF;
    cursor: pointer;
}

.pantalla {
    display: inline-block;
    width: 85%;
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

.noSeleccionado > h3{
    font-size: 27px;
    color: #C7D5E5;
}
</style>