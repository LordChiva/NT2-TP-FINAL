<template>
    <div class="contenedorProductos">
        <div class="contenedorCombos">     
            <div class="combos">
                <td v-for="(option,p) in options" :key="'productos'+p">
                    <li>
                        <div v-if="p == 0">
                            <img alt="imagen"  src="../assets/comboNacho.png"  class="imagenProducto">
                        </div>
                        <div v-if="p == 1">
                            <img alt="imagen"  src="../assets/comboPancho.png"  class="imagenProducto">
                        </div>
                        <div v-if="p == 2">
                            <img alt="imagen"  src="../assets/comboSuper.png"  class="imagenProducto">
                        </div>
                        <div v-if="p == 3">
                            <img alt="imagen"  src="../assets/comboTeriyaqui.png"  class="imagenProducto">
                        </div>
                        
                        <div class="descripcion">
                            <h3>{{option.nombre}}</h3>
                            <br>
                            <h5>{{option.descripcion}}</h5>
                            <br>
                            <h6>Precio: ${{option.precio}}</h6>
                            <br>
                            <b-button class="boton" @click="agregarASeleccionados(option)">Agregar</b-button>
                            <div class="sacarBoton" v-if="option.cant > 0">
                                <b-button class="boton" @click="sacarASeleccionados(option)">Quitar</b-button>
                                <h6>{{option.cant}}</h6>
                            </div> 
                        </div>  
                    </li>
                </td>
            </div> 
            <div v-if="this.seleccionados.length > 0">
                <b-button class="boton" @click="getExchangeValue(dolar)">Pagar U$S</b-button><br>
            </div>                             
            <div class="precio" v-if="this.totalEnDolar == 0">
                <h5>Total <strong>${{ getPrecioTotal(seleccionados) }}</strong></h5>
            </div> 
            <div class="precio" v-if="this.totalEnDolar > 0">
                <h5>Dolar {{dolar}}</h5> 
                <h5>Total {{totalEnDolar}}U$S</h5>
            </div>            
        </div>
        <b-input-group-append class="contenedorB">
            <b-button class="boton" @click="salaCineEnNull()"><router-link to="/SalaCine">Volver</router-link></b-button>
            <b-button class="boton" @click="productosSeleccionada(seleccionados)"><router-link to="/Confirmar">Siguiente</router-link></b-button>
        </b-input-group-append>
    </div>
</template>


<script>
import axios from 'axios'



export default {
    data: () => {
        return{
            seleccionados: [],
            options:[],
            posts: [],
            dolar:0,
            totalEnDolar:0             
        }
    },
    components:
    {

    },
    mounted() {
    this.options = this.consultandoMockApi(); 
      console.log("Aca esta el mounted")
    axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then((response)=> {
        console.log("response.data "+response.data)

        const filteredUsdData = response.data.find((exchange)=> exchange.casa.nombre.toLowerCase() === "dolar oficial")
    if (filteredUsdData) {
        
       let usd=Number(filteredUsdData.casa.venta.replace(',','.'))
       
       this.dolar=usd
      return {usd}    
    } 
    else {
      console.log("No funco")
    }
      
    })

  },
    
     methods: {

         consultandoMockApi() {
            axios.get('https://5fbc46e9c09c200016d4192c.mockapi.io/Combos')
            .then((response)=> {
                const respuesta = response.data
                this.options=respuesta
            })
        },




        productosSeleccionada (seleccionados) {  
            this.$store.state.combos=seleccionados;           
            this.$store.dispatch('agregarCombos',seleccionados);
            if (this.totalEnDolar > 0)  {
                this.$store.state.precioTotalcombos = this.totalEnDolar;           
                this.$store.dispatch('agregarPrecioTotalcombos',this.totalEnDolar); 
                this.$store.state.dolar = 1;           
                this.$store.dispatch('agregarDolar',1); 
            } else {
                this.$store.state.precioTotalcombos = this.getPrecioTotal(seleccionados);           
                this.$store.dispatch('agregarPrecioTotalcombos',this.getPrecioTotal(seleccionados));
            }                       
        },
        salaCineEnNull() {
            this.$store.state.butacas=null;           
            this.$store.dispatch('agregarButacas',null);
        },       
        getPrecioTotal(seleccionados) {
            var total = 0;
            for (let index = 0; index < seleccionados.length; index++) {
                total = total + (seleccionados[index].precio * seleccionados[index].cant);
                this.totalSinDolar = total;
            }
            if (this.$store.getters.usuario.vip == true) {
                this.totalSinDolar = total - total * 0.1;
            }
            return this.totalSinDolar;
        },        
        agregarASeleccionados(option) {                    
            option.cant = option.cant + 1;
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
            if (this.totalEnDolar > 0) {
                this.getExchangeValue(this.dolar)
            }                       
        },
        sacarASeleccionados(option) {
            option.cant=option.cant-1
            if (option.cant == 0) {
                this.seleccionados.pop(option)
            }
            if (this.seleccionados.length == 0) {
                this.totalEnDolar = 0
            } 
            if (this.totalEnDolar > 0) {
                this.getExchangeValue(this.dolar)
            }             
        },
        getExchangeValue(dolar)
        {
            this.totalEnDolar = this.getPrecioTotal(this.seleccionados) / dolar
            this.totalEnDolar =this.totalEnDolar.toFixed(2);
            return this.totalEnDolar;
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

.sacarBoton {
    display: inline-block;
    justify-content: center;
    width: 85%;
    margin: 10px;
}

.precio > h5 {
  font-size: 25px;
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