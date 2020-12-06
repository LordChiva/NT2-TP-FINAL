<template>
    <div>        
        <div class="container-table container-table-edit">
            <div class="table--title table-title-edit">Informe</div>   
            <div class="table--header">Película</div>   
            <div class="table--header">Butacas Vendidas</div>  
            <div class="table--header">Recaudación por Tickets</div> 
            <div class="table--header">Recaudación por Combos</div>  
            <div class="table--header">Total Recaudación</div>             
            <div class="table--contenedor" v-for="(cant,index) in cantPelisVistas" :key="'cantPelisVistas'+index">
                <div class="table"> <h3>{{cant.nombre}}</h3></div> 
                <div class="table"> {{cant.cantPeli}}</div> 
                <div class="table"> ${{cant.totalRecaudado.toFixed(2)}}</div>    
                <div class="table"> ${{cant.TotalCombo.toFixed(2)}}</div>    
                <div class="table"> ${{cant.totalComboMasRecaudado.toFixed(2)}}</div>    
            </div>            
            <div class="table--item total">Total</div>  
            <div class="table--item total">{{this.totalCant}}</div>               
            <div class="table--item total">${{this.totalRecaudado.toFixed(2)}}</div>  
            <div class="table--item total">${{this.totalSnacks.toFixed(2)}}</div>  
            <div class="table--item total">${{this.total.toFixed(2)}}</div>  
        </div>   
        <b-button class="boton"><router-link to="/Cuenta">Volver</router-link></b-button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            reservas: this.getReservas(),
            cantPelisVistas: [{nombre:"El Rey León",TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {nombre:"El origen",TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {nombre:"Star Wars: Episodio IX",TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {nombre:"Avatar",TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {nombre:"Jumanji",TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {nombre:"Rapidos y Furiosos",TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {nombre:"Guerra Mundial Z",TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {nombre:"Deadpool",TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {nombre:"Jurassic World",TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0}],
            totalCant: 0,totalRecaudado :0,totalSnacks:0,total:0,dolar:87,subTotalCant: 0,
            ticketVip:(this.$store.getters.precioPelicula-(this.$store.getters.precioPelicula*10/100))
        }
    },
    methods: {
        getReservas() {
            axios.get('https://5fbc46e9c09c200016d4192c.mockapi.io/Confirmar')
            .then((response)=> {
                const respuesta = response.data
                this.reservas=respuesta 
                this.sumar()           
                this.totalRec()   
            })      
        },
        sumar() {
            for (let i = 0; i < this.reservas.length; i++) {
                for (let x = 0; x < this.cantPelisVistas.length; x++) {
                    if (this.reservas[i].Pelicula == this.cantPelisVistas[x].nombre) {
                        this.cantPelisVistas[x].cantPeli = this.cantPelisVistas[x].cantPeli + this.reservas[i].Butacas.length                  
                        if (this.reservas[i].Dolar == 1) {
                            this.cantPelisVistas[x].TotalCombo = this.cantPelisVistas[x].TotalCombo + this.reservas[i].TotalCombo*this.dolar
                        } else {
                            this.cantPelisVistas[x].TotalCombo = this.cantPelisVistas[x].TotalCombo + this.reservas[i].TotalCombo
                        }                    
                        if (this.reservas[i].Vip == true) {
                            this.cantPelisVistas[x].totalRecaudado = this.reservas[i].Butacas.length*this.ticketVip + this.cantPelisVistas[x].totalRecaudado
                        } else {
                            this.cantPelisVistas[x].totalRecaudado = this.cantPelisVistas[x].totalRecaudado + this.reservas[i].Butacas.length*this.$store.getters.precioPelicula
                        }
                        this.cantPelisVistas[x].totalComboMasRecaudado = (this.cantPelisVistas[x].totalRecaudado + this.cantPelisVistas[x].TotalCombo) 
                    } 
                }                    
                this.totalCant = this.reservas.length 
            }  
        },
        totalRec() {
            for (let i = 0; i < this.cantPelisVistas.length; i++) { 
                this.subTotalCant = this.cantPelisVistas[i].cantPeli + this.subTotalCant
                this.totalCant = this.subTotalCant
                this.totalRecaudado = this.totalRecaudado + this.cantPelisVistas[i].totalRecaudado  
                this.totalSnacks = this.totalSnacks + this.cantPelisVistas[i].TotalCombo   
                this.total = this.total + this.cantPelisVistas[i].totalComboMasRecaudado
            }            
        }
    },        
}
</script>

<style>
.container-table {
	width: 90%;
	background: white;
	margin: 50px auto;
	box-shadow: 0 0 20px #333;

	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-auto-rows: 50px;
}

.table--title {
	grid-column-start: 1;
	grid-column-end: 6;
	background: rgba(40,65,120,1);
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	font-size: 1.9em;
}

.table--contenedor {
    grid-column-start: 1;
	grid-column-end: 6;
    display: flex;
	justify-content: center;
	align-items: center;
}

.table--header, .table--item {
	display: flex;
	justify-content: center;
	align-items: center;
}

.table--header{
	font-weight: bold;
	font-size: 1.5em;
}

.table--item {
	padding: 10px;
	font-size: 1.2em;
}  
  
.table {
    padding: 10px;
	font-size: 1.2em;
}

.total {
	background: rgba(40,65,120,1);
	color: white;
}
</style>