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
                            <td><h5>Seleccionado: <i class="fas fa-couch" :style="'color: #FFF1AA'"></i></h5></td>
                            <td><h5>Ocupado: <i class="fas fa-couch" :style="'color: #DA4127'"></i></h5></td>
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
                                    <i class="fas fa-couch" v-bind:style="{color:getColor(asiento)}"  ></i>
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
</template>

<script>
import pantallaPng from "../assets/pantallaPng.png"
import axios from 'axios'

export default {

 name:"SalaCine",


    created()
    {    
       this.consultandoMockApi(this.$store.getters.pelicula.nombre,this.$store.getters.fecha.replace('/','%2F').replace('/','%2F').trim());
    },
    data ()  {
        return{
            id:this.$route.params.id, 
            butacasSeleccionados: [],
            salas: [],
            salasAux:[],
            pantalla: {imagen:pantallaPng},
            numeros:[1,2,3,4,5,6,7,8,9,10],
             filas : [
                { fila: "a", asientos: [{ numero: 1 }, { numero: 2 }, { numero: 3 }] },
                { fila: "b", asientos: [{ numero: 1 }, { numero: 2 }, { numero: 3 }] },
            ],
            

           

            letras:[                    
                'A','B','C','D','E','F','G','H'
            ],
             letrasV:[                    
                'A','B','C','D','E','F','G','H'
            ]
            
        }        
    },
    methods: {
        //Para que se autoComplete los ocupados de la sala 
        getColor(asiento)
        {
            if(this.$store.getters.usuario.vip==true)
            {
                if (asiento.ocupado==true)
            {
                return '#DA4127'
            }
            else
            {
                return '#409EFF'
            }

            }
            else
            {
                if(asiento.vip==true)
                {
                        return '#FFF1AA'
                }

                if (asiento.ocupado==true)
            {
                return '#DA4127'
            }
            else
            {
                return '#409EFF'
            }

            
            }
            

        },
       async setearAsientosMockApi(asiento)
        {
             await axios.put('http://localhost:8081/asientos/'+asiento.id,asiento);
        },
//Para subir al MockApi los seleccionados de la sala
        setearOcupado(asiento) {
                var index;
                index=this.butacasSeleccionados.findIndex( a => a.id == asiento.id)
                if(this.$store.getters.usuario.vip==false &&asiento.vip==true)
                 {
                     return ;
                 }

                
                 

                     if(asiento.ocupado&& index >= 0)
                {
                    asiento.ocupado=false  
                    this.$refs['asiento'+asiento.id][0].children[0].style.color='#409EFF'
                    this.butacasSeleccionados.splice(index,1);
                    this.setearAsientosMockApi(asiento)
                    
                }
                else
                {
                    if(index<0 && !asiento.ocupado)
                    {
                    asiento.ocupado=true            
                    this.$refs['asiento'+asiento.id][0].children[0].style.color='#DA4127'
                    this.butacasSeleccionados.push(asiento);
                    this.setearAsientosMockApi(asiento)
                    
                    }
                }
        },
        asientoSeleccion(butacasSeleccionados) {
                this.$store.state.butacas=butacasSeleccionados;           
                this.$store.dispatch('agregarButacas',butacasSeleccionados);
        },
        pantallaPeliculaenNull() {
                this.$store.state.fecha=null;           
                this.$store.dispatch('agregarFecha',null);
        },
         crearAsientos () {    
        var asientos =[];
        var letrasV=['A','B','C','D','E','F','G','H'];
            var id=0;
            var filasVip=['A','B','C','D']
            var columnasVip=[4,5,6,7]
   
                if(this.$store.getters.usuario.vip ==true){
                 letrasV.forEach(async letra => {
         
                for (var i =1;i<=10;i++)
                {
                    var bloqueado=false
                    
                    if(filasVip.includes(letra)&&columnasVip.includes(i))
                    {
                        bloqueado=true
                    }
                                 
                     this.cargarAsiento({id:id,ocupado:false,color:'#409EFF',fila:letra,columna:i,vip:bloqueado}); 
                    await new Promise(r => setTimeout(r, 35000));
                    id++;
                }
                })
                }
        return asientos;
        },
       /*  async cargarAsiento(asiento) {
                try {
                    await axios.post('https://5fbc46e9c09c200016d4192c.mockapi.io/Asientos',asiento);
                    
                } catch (error) {
                    console.log(error)
                }                
            }, */
         consultandoMockApi(pelicula,fecha) {
             var url='http://localhost:8081/asientos/pelicula/'+pelicula+'/fecha/'+fecha;
                 axios.get(url)
                .then((response)=> {
                    this.salas=response.data
                })
                
            },
           
        
    }
    
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

.contenedorNum
{
    padding-left: 15px;

}

.contenedorNum > td {
    width: 4%;
    margin: 0px 10px 0px 10px;
    padding: 0px 0px 0px 0px;
    padding-left: 0px;
    padding-right:1.5px;
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