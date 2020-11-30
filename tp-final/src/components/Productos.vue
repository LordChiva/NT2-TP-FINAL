<template>
    <div class="contenedorProductos">
        <div class="contenedorCombos">     
            <div class="combos">
                <td v-for="(producto,p) in productos" :key="'productos'+p">
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
import axios from 'axios'

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
            axios.get('https://5fbc46e9c09c200016d4192c.mockapi.io/Combos')
            .then((response)=> {
                const respuesta = response.data
                this.productos=respuesta
            })
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