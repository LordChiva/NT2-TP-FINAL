<template>
    <div class="contenedorProductos">
        <div class="contenedorCombos">     
            <div class="combos">
                <td v-for="(producto,index) in productos" :key="index">
                    <li>
                        <img alt="imagen"  v-bind:src="producto.imagen"  class="imagenProducto">
                        <div class="descripcion">
                            <h3>{{producto.nombre}}</h3>
                            <br>
                            <h5>{{producto.descripcion}}</h5>
                            <br>
                            <h6>Precio: {{producto.precio}}</h6>
                        </div>  
                    </li>  
                </td>
            </div>        
        </div>
        <b-input-group-append class="contenedorB">
            <b-button class="boton"> <router-link to="/">Volver</router-link></b-button>
        </b-input-group-append>
    </div>
</template>


<script>
import comboNacho from "../assets/comboNacho.png"
import comboPancho from "../assets/comboPancho.png"
import comboSuper from "../assets/comboSuper.png"
import comboTeriyaqui from "../assets/comboTeriyaqui.png"

export default {
    data: () => {
        return{
            productos: []
        }
    },
    mounted() {
        this.productos = this.getProductos()
    },
    methods: {
        getProductos() {
             const Productos = [
                { nombre: "Combo Nacho",
                  precio: "$379.99",
                  descripcion:"El combo nacho contiene una bandeja con nachos y cheddar (opcional), más una gaseosa tamaño mediano.",
                  imagen:comboNacho
                },
                { nombre: "Combo Pancho",
                  precio: "$459.99",
                  descripcion:"El combo pancho contiene una gaseosa de tamaño mediano, un balde de pochoclos grande, y un super pancho.",
                  imagen:comboPancho
                },
                { nombre: "Combo Super",
                  precio: "$699.99",
                  descripcion:"El combo super contiene dos gaseosas de tamaño medianas, pochoclos tamaño grande, bandeja con papas Lays, un super pancho y una hamburguesa (carne, tomate, lechuga).",
                  imagen:comboSuper
                },
                { nombre: "Combo Teriyaki",
                  precio: "$549.99",
                  descripcion:"El combo teriyaki contiene dos gaseosas de tamaño mediano, más dos sandwiches de pollo estilo teriyaki.",
                  imagen:comboTeriyaqui
                }   
            ]
            return Productos
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