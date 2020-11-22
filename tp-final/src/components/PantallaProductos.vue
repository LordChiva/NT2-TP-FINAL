<template>
    <div class="contenedorProductos">
        <div class="contenedorCombos">     
            <div class="combos">

                <!--  ESTE ES EL ORIGINAL
                <b-form-checkbox-group
                    id="checkbox-group-1"
                    v-model="selected"
                    :options="options"
                    name="flavour-1"
                ></b-form-checkbox-group> 

                <b-form-group label="Using options array:">
                    <b-form-checkbox-group
                        id="checkbox-group-1"
                        v-model="seleccionados"
                        :options="options"
                        style="columns: 2">
                    </b-form-checkbox-group>
                </b-form-group>-->

                <div v-for="(option,index) in options" :key="index">
                    <h3>{{option.nombre}}</h3>
                    <img alt="imagen"  v-bind:src="option.imagen"  class="imagenProducto">
                    <div class="descripcion">
                        <h3>{{option.text}}</h3>
                        
                        <h6>Precio: ${{option.precio}}</h6><button @click="agregarASeleccionados(option)">Agregar</button>  
                        <div v-if="option.cant > 0">
                            <button @click="sacarASeleccionados(option)">Quitar</button>
                            <h6>{{option.cant}}</h6>
                        </div> 
                    </div>               
                </div>
                

                <!-- <td v-for="(producto,index) in productos" :key="index"

            @click="calcularTotal(index)":id='producto'+index">

                    <li>
                        <img alt="imagen"  v-bind:src="options.imagen"  class="imagenProducto">
                        <div class="descripcion">
                            <h3>{{options.text}}</h3>
                            <br>
                            <h5>{{options.descripcion}}</h5>
                            <br>
                            <h6>Precio: ${{options.precio}}</h6>
                        </div>
                    </li>  
                </td>-->

                 
                  

                <div v-if="$store.getters.usuario.vip == true">
                    <h3>Descuento</h3>
                </div>
            </div>           
            <div><h1>Total: <strong>${{ getPrecioTotal(seleccionados) }}</strong> </h1></div>
        </div>

            <!-- buscar de hacer un metodo para que devuelva un total de lo acumulado
                 deberia ser con un += y producto.precio -->

        <b-input-group-append class="contenedorB">
            <b-button class="boton" @click="salaCineenNull()"><router-link to="/SalaCine">Volver</router-link></b-button>
            <b-button class="boton" @click="productosSeleccionada(seleccionados)"><router-link to="/Confirmar">Siguiente</router-link></b-button>
        </b-input-group-append>

         <b-button class="boton" @click="getExchangeValue(dolar)">U$S</b-button>
         <h1>{{dolar}}</h1>
    </div>
</template>


<script>
import comboNacho from "../assets/comboNacho.png"
import comboPancho from "../assets/comboPancho.png"
import comboSuper from "../assets/comboSuper.png"
import comboTeriyaqui from "../assets/comboTeriyaqui.png"
import axios from 'axios'



export default {
    data: () => {
        return{
            seleccionados: [],
            options:[],
            posts: [],
            dolar:0
              
        }
    },
    components:
    {

    },
    mounted() {
      console.log("Aca esta el mounted")
    axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then((response)=> {
        console.log("response.data "+response.data)

        const filteredUsdData = response.data.find((exchange)=> exchange.casa.nombre.toLowerCase() === "dolar oficial")
    if (filteredUsdData) {
        console.log("Q es esto papi "+filteredUsdData.casa.venta)
       let usd=Number(filteredUsdData.casa.venta.replace(',','.'))
       console.log("Esto no es coca papi "+usd)
       this.dolar=usd
      return {usd}    
    } 
    else {
      console.log("No funco")
    }
      
    })

  },
    
     methods: {
       /* calcularTotal(id)
        {
            var elemento =document.getElementById("producto"+id)
            total=elemento.precio+total
        },*/
        productosSeleccionada (seleccionados) {  
            this.$store.state.combos=seleccionados;           
            this.$store.dispatch('agregarCombos',seleccionados);
            this.$store.state.precioTotalcombos=this.getPrecioTotal(seleccionados);           
            this.$store.dispatch('agregarPrecioTotalcombos',this.getPrecioTotal(seleccionados));            
        },
        salaCineenNull() {
            this.$store.state.butacas=null;           
            this.$store.dispatch('agregarButacas',null);
        },
        getOptions () {
            const options = [
                { id: 1,
                  nombre: 'Combo Nacho',
                  precio: 380,
                  descripcion:'El combo nacho contiene una bandeja con nachos y cheddar (opcional), más una gaseosa tamaño mediano.',
                  imagen:comboNacho,
                  cant: 0
                },
                { id: 2,
                  nombre: 'Combo Pancho',
                  precio: 460,
                  descripcion:'El combo pancho contiene una gaseosa de tamaño mediano, un balde de pochoclos grande, y un super pancho.',
                  imagen:comboPancho,
                  cant: 0
                },
                { id: 3,
                  nombre: 'Combo Super',
                  precio: 700,
                  descripcion:'El combo super contiene dos gaseosas de tamaño medianas, pochoclos tamaño grande, bandeja con papas Lays, un super pancho y una hamburguesa (carne, tomate, lechuga).',
                  imagen:comboSuper,
                  cant: 0
                },
                { id: 4,
                  nombre: 'Combo Teriyaki',
                  precio: 550,
                  descripcion:'El combo teriyaki contiene dos gaseosas de tamaño mediano, más dos sandwiches de pollo estilo teriyaki.',
                  imagen:comboTeriyaqui,
                  cant: 0
                }   
            ]
            return options
        },
        getPrecioTotal(seleccionados) {
            var total = 0;
            for (let index = 0; index < seleccionados.length; index++) {
                total = total + (seleccionados[index].precio * seleccionados[index].cant);
            }
            return total;
        },        
        agregarASeleccionados(option) { 
            console.log("Que es esto "+option)
            option.cant=option.cant+1
            if (this.seleccionados.length == 0) {
                this.seleccionados.push(option)
            } else {
                for (let index = 0; index < this.seleccionados.length; index++) {
                    if (this.seleccionados[index] != option) {
                        this.seleccionados.push(option)
                    } 
                    if (this.seleccionados[index] == option) {
                        index == this.seleccionados.length
                    }
                }
            }     
        },
        sacarASeleccionados(option) {
            option.cant=option.cant-1
            if (option.cant == 0) {
                this.seleccionados.pop(option)
            }
        },
        getExchangeValue(dolar)
        {
            dolar=dolar+100
            console.log("Es coca papi "+dolar)
        }
   
         
         

     
  }
    
}
           
   
  

</script>

<style>
.contenedorProductos {
    display: inline-block;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
}

.contenedorCombos {
    display: inline-block;
    width: 100%;
}

.combos {
    width: 100%;
    display: inline-grid;
    grid-template-columns: repeat(2, 35%);
    justify-content: center;
}

.combos > td {
    display: inline-flex;
    justify-content: center;
    margin: 35px;    
}

.imagenProducto {
    width: 340px;
    height: 180px;
}

.descripcion {
    display: inline-block;
    justify-content: center;
    width: 85%;
    margin: 10px 0px 0px 20px;
}

.descripcion > h3{
  font-size: 30px;
  color: #9FADBD;
  text-align: center;
}

.descripcion > h5{
  font-size: 20px;
  color: #9FADBD;
  text-align: justify;
}

.descripcion > h6{
  font-size: 20px;
  color: #9FADBD;
  text-align: center;
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
    background-color: rgba(21, 34, 50, 0.3);
    font-weight: bold;
}

.boton :hover{ 
    color: #C7D5E5;
    background-color: none;
}
</style>