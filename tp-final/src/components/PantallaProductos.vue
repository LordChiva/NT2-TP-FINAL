<template>
  <div class="contenedorPrincipal">
    <ol class="olContainer">     
        <table class="tableContainer">
           <tr>                            
                <td input type="button" v-for="(producto,index) in productos" :key="index">
                    <li> 
                        <input type="checkbox" /> 
                        <img alt="imagen"  v-bind:src="producto.imagen"  class="img-responsive" height="80" width="80">		
                        <span>{{ producto.nombre}} </span>
                        <span>Precio: {{ producto.precio}} </span>
                        <hr>   
                    </li>  
                </td>
            </tr>
        </table> 
        <h1>Total: </h1>
        <div>
            <b-button class="botton"> <router-link to="/Confirmar">Confirmar</router-link></b-button>	<b-button class="botton"> <router-link to="/SalaCine">Volver</router-link></b-button>
        </div>       
    </ol>
  </div>
</template>


<script>
import nachos from "../assets/nachos.jpg"
import agua from "../assets/agua.jpg"
import gaseosa from "../assets/gaseosa.jpg"
import pochoclos from "../assets/pochoclos.jpg"

export default {
    /**cambienle el name, cambienle el tipo de la prop. Esa prop esta para algo?
     *  el título devuelve un número? Tiene metodos? */
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
        margin:  0px 1000px 10px 100px;
    }

    .botton {
        padding: 5px;
        border: 1px solid rgba(21, 34, 50, 0.7);
        border-radius: 10px;
        margin: 0px 20px 0px 20px;
        width: 100px;
        color: #fff;
        background-color: rgb(21, 34, 50, 0.3);
        font-weight: bold;
    }

    .botton:hover {
        list-style: none;
        color: #fff !important;
        background-color: #007bff;
        cursor: pointer;
    }

    .botton a {
        font-weight: bold;
        color: #9FADBD;
        text-decoration: none;
    }
</style>