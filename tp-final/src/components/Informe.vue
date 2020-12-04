<template>
    <div>
        <div class="container-table container-table-edit">
            <div class="table--title table-title-edit">Informe</div>   
            <div class="table--header">Película</div>   
            <div class="table--header">Butacas Vendidas</div>  
            <div class="table--header">Recaudación por Tickets</div> 
            <div class="table--header">Recaudación por Combos</div>  
            <div class="table--header">Total Recaudación</div> 
            <div class="table--item"> <h3>El Rey León</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[0].cantPeli}}</div> 
            <div class="table--item"> ${{this.cantPelisVistas[0].totalRecaudado.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[0].TotalCombo.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[0].totalComboMasRecaudado.toFixed(2)}}</div>  
            <div class="table--item"> <h3>El origen</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[1].cantPeli}}</div> 
            <div class="table--item"> ${{this.cantPelisVistas[1].totalRecaudado.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[1].TotalCombo.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[1].totalComboMasRecaudado.toFixed(2)}}</div> 
            <div class="table--item"> <h3>Star Wars: Episodio IX</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[2].cantPeli}}</div> 
            <div class="table--item"> ${{this.cantPelisVistas[2].totalRecaudado.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[2].TotalCombo.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[2].totalComboMasRecaudado.toFixed(2)}}</div>
            <div class="table--item"> <h3>Avatar</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[3].cantPeli}}</div> 
            <div class="table--item"> ${{this.cantPelisVistas[3].totalRecaudado.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[3].TotalCombo.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[3].totalComboMasRecaudado.toFixed(2)}}</div>
            <div class="table--item"> <h3>Jumanji</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[4].cantPeli}}</div> 
            <div class="table--item"> ${{this.cantPelisVistas[4].totalRecaudado.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[4].TotalCombo.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[4].totalComboMasRecaudado.toFixed(2)}}</div>
            <div class="table--item"> <h3>Rapidos y Furiosos</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[5].cantPeli}}</div> 
            <div class="table--item"> ${{this.cantPelisVistas[5].totalRecaudado.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[5].TotalCombo.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[5].totalComboMasRecaudado.toFixed(2)}}</div>
            <div class="table--item"> <h3>Guerra Mundial Z</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[6].cantPeli}}</div> 
            <div class="table--item"> ${{this.cantPelisVistas[6].totalRecaudado.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[6].TotalCombo.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[6].totalComboMasRecaudado.toFixed(2)}}</div>
            <div class="table--item"> <h3>Deadpool</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[7].cantPeli}}</div> 
            <div class="table--item"> ${{this.cantPelisVistas[7].totalRecaudado.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[7].TotalCombo.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[7].totalComboMasRecaudado.toFixed(2)}}</div> 
            <div class="table--item"> <h3>Jurassic World</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[8].cantPeli}}</div> 
            <div class="table--item"> ${{this.cantPelisVistas[8].totalRecaudado.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[8].TotalCombo.toFixed(2)}}</div>    
            <div class="table--item"> ${{this.cantPelisVistas[8].totalComboMasRecaudado.toFixed(2)}}</div>  
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
            cantPelisVistas: [{TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0,totalComboMasRecaudado:0}],
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
                if (this.reservas[i].Pelicula == "El Rey León") {
                    this.cantPelisVistas[0].cantPeli = this.cantPelisVistas[0].cantPeli + this.reservas[i].Butacas.length                  
                    if (this.reservas[i].Dolar == 1) {
                        this.cantPelisVistas[0].TotalCombo = this.cantPelisVistas[0].TotalCombo + this.reservas[i].TotalCombo*this.dolar
                    } else {
                        this.cantPelisVistas[0].TotalCombo = this.cantPelisVistas[0].TotalCombo + this.reservas[i].TotalCombo
                    }                    
                    if (this.reservas[i].Vip == true) {
                        this.cantPelisVistas[0].totalRecaudado = this.reservas[i].Butacas.length*this.ticketVip + this.cantPelisVistas[0].totalRecaudado
                    } else {
                        this.cantPelisVistas[0].totalRecaudado = this.cantPelisVistas[0].totalRecaudado + this.reservas[i].Butacas.length*this.$store.getters.precioPelicula
                    }
                this.cantPelisVistas[0].totalComboMasRecaudado = (this.cantPelisVistas[0].totalRecaudado + this.cantPelisVistas[0].TotalCombo) 
                }     
                if (this.reservas[i].Pelicula == "El origen") {
                    this.cantPelisVistas[1].cantPeli = this.cantPelisVistas[1].cantPeli + this.reservas[i].Butacas.length 
                    if (this.reservas[i].Dolar == 1) {
                        this.cantPelisVistas[1].TotalCombo = this.cantPelisVistas[1].TotalCombo + this.reservas[i].TotalCombo*this.dolar
                    } else {
                        this.cantPelisVistas[1].TotalCombo = this.cantPelisVistas[1].TotalCombo + this.reservas[i].TotalCombo
                    } 
                   if (this.reservas[i].Vip == true) {
                        this.cantPelisVistas[1].totalRecaudado = this.reservas[i].Butacas.length*this.ticketVip + this.cantPelisVistas[1].totalRecaudado
                    } else {
                        this.cantPelisVistas[1].totalRecaudado = this.cantPelisVistas[1].totalRecaudado + this.reservas[i].Butacas.length*this.$store.getters.precioPelicula
                    }
                this.cantPelisVistas[1].totalComboMasRecaudado = (this.cantPelisVistas[1].totalRecaudado + this.cantPelisVistas[1].TotalCombo) 
                }  
                if (this.reservas[i].Pelicula == "Star Wars: Episodio IX") {
                    this.cantPelisVistas[2].cantPeli = this.cantPelisVistas[2].cantPeli + this.reservas[i].Butacas.length 
                    if (this.reservas[i].Dolar == 1) {
                        this.cantPelisVistas[2].TotalCombo = this.cantPelisVistas[2].TotalCombo + this.reservas[i].TotalCombo*this.dolar
                    } else {
                        this.cantPelisVistas[2].TotalCombo = this.cantPelisVistas[2].TotalCombo + this.reservas[i].TotalCombo
                    } 
                    if (this.reservas[i].Vip == true) {
                        this.cantPelisVistas[2].totalRecaudado = this.reservas[i].Butacas.length*this.ticketVip + this.cantPelisVistas[2].totalRecaudado
                    } else {
                        this.cantPelisVistas[2].totalRecaudado = this.cantPelisVistas[2].totalRecaudado + this.reservas[i].Butacas.length*this.$store.getters.precioPelicula
                    }
                this.cantPelisVistas[2].totalComboMasRecaudado = (this.cantPelisVistas[2].totalRecaudado + this.cantPelisVistas[2].TotalCombo) 
                }  
                if (this.reservas[i].Pelicula == "Avatar") {
                    this.cantPelisVistas[3].cantPeli = this.cantPelisVistas[3].cantPeli + this.reservas[i].Butacas.length 
                    if (this.reservas[i].Dolar == 1) {
                        this.cantPelisVistas[3].TotalCombo = this.cantPelisVistas[3].TotalCombo + this.reservas[i].TotalCombo*this.dolar
                    } else {
                        this.cantPelisVistas[3].TotalCombo = this.cantPelisVistas[3].TotalCombo + this.reservas[i].TotalCombo
                    } 
                    if (this.reservas[i].Vip == true) {
                        this.cantPelisVistas[3].totalRecaudado = this.reservas[i].Butacas.length*this.ticketVip + this.cantPelisVistas[3].totalRecaudado
                    } else {
                        this.cantPelisVistas[3].totalRecaudado = this.cantPelisVistas[3].totalRecaudado + this.reservas[i].Butacas.length*this.$store.getters.precioPelicula
                    }
                this.cantPelisVistas[3].totalComboMasRecaudado = (this.cantPelisVistas[3].totalRecaudado + this.cantPelisVistas[3].TotalCombo) 
                }  
                if (this.reservas[i].Pelicula == "Jumanji") {
                    this.cantPelisVistas[4].cantPeli = this.cantPelisVistas[4].cantPeli + this.reservas[i].Butacas.length 
                    if (this.reservas[i].Dolar == 1) {
                        this.cantPelisVistas[4].TotalCombo = this.cantPelisVistas[4].TotalCombo + this.reservas[i].TotalCombo*this.dolar
                    } else {
                        this.cantPelisVistas[4].TotalCombo = this.cantPelisVistas[4].TotalCombo + this.reservas[i].TotalCombo
                    }                   
                    if (this.reservas[i].Vip == true) {
                        this.cantPelisVistas[4].totalRecaudado = this.reservas[i].Butacas.length*this.ticketVip + this.cantPelisVistas[4].totalRecaudado
                    } else {
                        this.cantPelisVistas[4].totalRecaudado = this.cantPelisVistas[4].totalRecaudado + this.reservas[i].Butacas.length*this.$store.getters.precioPelicula
                    }
                this.cantPelisVistas[4].totalComboMasRecaudado = (this.cantPelisVistas[4].totalRecaudado + this.cantPelisVistas[4].TotalCombo) 
                }  
                if (this.reservas[i].Pelicula == "Rapidos y Furiosos") {
                    this.cantPelisVistas[5].cantPeli = this.cantPelisVistas[5].cantPeli + this.reservas[i].Butacas.length 
                    if (this.reservas[i].Dolar == 1) {
                        this.cantPelisVistas[5].TotalCombo = this.cantPelisVistas[5].TotalCombo + this.reservas[i].TotalCombo*this.dolar
                    } else {
                        this.cantPelisVistas[5].TotalCombo = this.cantPelisVistas[5].TotalCombo + this.reservas[i].TotalCombo
                    } 
                    if (this.reservas[i].Vip == true) {
                        this.cantPelisVistas[5].totalRecaudado = this.reservas[i].Butacas.length*this.ticketVip + this.cantPelisVistas[5].totalRecaudado
                    } else {
                        this.cantPelisVistas[5].totalRecaudado = this.cantPelisVistas[5].totalRecaudado + this.reservas[i].Butacas.length*this.$store.getters.precioPelicula
                    }
                this.cantPelisVistas[5].totalComboMasRecaudado = (this.cantPelisVistas[5].totalRecaudado + this.cantPelisVistas[5].TotalCombo) 
                }  
                if (this.reservas[i].Pelicula == "Guerra Mundial Z") {
                    this.cantPelisVistas[6].cantPeli = this.cantPelisVistas[6].cantPeli + this.reservas[i].Butacas.length 
                    if (this.reservas[i].Dolar == 1) {
                        this.cantPelisVistas[6].TotalCombo = this.cantPelisVistas[6].TotalCombo + this.reservas[i].TotalCombo*this.dolar
                    } else {
                        this.cantPelisVistas[6].TotalCombo = this.cantPelisVistas[6].TotalCombo + this.reservas[i].TotalCombo
                    } 
                    if (this.reservas[i].Vip == true) {
                        this.cantPelisVistas[6].totalRecaudado = this.reservas[i].Butacas.length*this.ticketVip + this.cantPelisVistas[6].totalRecaudado
                    } else {
                        this.cantPelisVistas[6].totalRecaudado = this.cantPelisVistas[6].totalRecaudado + this.reservas[i].Butacas.length*this.$store.getters.precioPelicula
                    }
                this.cantPelisVistas[6].totalComboMasRecaudado = (this.cantPelisVistas[6].totalRecaudado + this.cantPelisVistas[6].TotalCombo) 
                }  
                if (this.reservas[i].Pelicula == "Deadpool") {
                    this.cantPelisVistas[7].cantPeli = this.cantPelisVistas[7].cantPeli + this.reservas[i].Butacas.length 
                    if (this.reservas[i].Dolar == 1) {
                        this.cantPelisVistas[7].TotalCombo = this.cantPelisVistas[7].TotalCombo + this.reservas[i].TotalCombo*this.dolar
                    } else {
                        this.cantPelisVistas[7].TotalCombo = this.cantPelisVistas[7].TotalCombo + this.reservas[i].TotalCombo
                    } 
                    if (this.reservas[i].Vip == true) {
                        this.cantPelisVistas[7].totalRecaudado = this.reservas[i].Butacas.length*this.ticketVip + this.cantPelisVistas[7].totalRecaudado
                    } else {
                        this.cantPelisVistas[7].totalRecaudado = this.cantPelisVistas[7].totalRecaudado + this.reservas[i].Butacas.length*this.$store.getters.precioPelicula
                    }
                this.cantPelisVistas[7].totalComboMasRecaudado = (this.cantPelisVistas[7].totalRecaudado + this.cantPelisVistas[7].TotalCombo) 
                }  
                if (this.reservas[i].Pelicula == "Jurassic World") {
                    this.cantPelisVistas[8].cantPeli = this.cantPelisVistas[8].cantPeli + this.reservas[i].Butacas.length 
                    if (this.reservas[i].Dolar == 1) {
                        this.cantPelisVistas[8].TotalCombo = this.cantPelisVistas[8].TotalCombo + this.reservas[i].TotalCombo*this.dolar
                    } else {
                        this.cantPelisVistas[8].TotalCombo = this.cantPelisVistas[8].TotalCombo + this.reservas[i].TotalCombo
                    } 
                    if (this.reservas[i].Vip == true) {
                        this.cantPelisVistas[8].totalRecaudado = this.reservas[i].Butacas.length*this.ticketVip + this.cantPelisVistas[8].totalRecaudado
                    } else {
                        this.cantPelisVistas[8].totalRecaudado = this.cantPelisVistas[8].totalRecaudado + this.reservas[i].Butacas.length*this.$store.getters.precioPelicula
                    }                  
                }
                this.cantPelisVistas[8].totalComboMasRecaudado = (this.cantPelisVistas[8].totalRecaudado + this.cantPelisVistas[8].TotalCombo) 
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
.total {
	background: rgba(40,65,120,1);
	color: white;
}
</style>