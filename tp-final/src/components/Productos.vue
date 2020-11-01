<template>
  <div class="contenedorPrincipal">
    <ol class="olContainer">     
        <table class="tableContainer">
           <tr>
                <td v-for="(producto,index) in productos" :key="index">
                    <li> 
                        <figure>
                            <img alt="imagen"  v-bind:src="producto.imagen"  class="img-responsive" height="80" width="80">											
                        </figure>
                        <span>{{ producto.nombre}} </span>
                        <span>Precio: {{ producto.precio}} </span>
                        <hr>   
                    </li>  
                </td>
            </tr>
        </table>        
    </ol>
    <div>
            <b-button > <router-link to="/SalaCine">Volver</router-link></b-button>	
    </div>
  </div>
</template>


<script>
import nachos from "../assets/nachos.jpg"
import agua from "../assets/agua.jpg"
import gaseosa from "../assets/gaseosa.jpg"
import pochoclos from "../assets/pochoclos.jpg"

export default {
    name:"AppHeader",
    props:{
        titulo:Number
    },
    data: () => {
        return{
            productos:[
                { nombre: 'Pochoclos', precio: '150', descripcion:' ', imagen:pochoclos},
                { nombre: 'Gaseosa'  , precio: '80' , descripcion:' ', imagen:gaseosa},
                { nombre: 'Agua'     , precio: '60' , descripcion:' ', imagen:agua},
                { nombre: 'Nachos'   , precio: '100', descripcion:' ', imagen:nachos}   
            ]
        }
    },
    methods: {
        
    }
}
</script>

<style>
    .contenedorPrincipal > ol > table > tr {
        width: 100%;
        display: grid;
        margin: 0px 0px 0px 100px;
    }

    .tableContainer  tr  td {
        margin:  0px 10px 10px 1px;
    }
</style>