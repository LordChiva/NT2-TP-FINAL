<template>
    <div>
        <div class="container-table container-table-edit">
            <div class="table--title table-title-edit">Informe</div>   
            <div class="table--header">Película</div>   
            <div class="table--header">Cantidad de veces vista</div>  
            <div class="table--header">Recaudación por Tickets</div> 
            <div class="table--header">Recaudación por Combos</div>  
            <div class="table--header">Total Recaudación</div> 
            <div class="table--item"> <h3>El Rey León</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[0].cantPeli}}</div> 
            <div class="table--item"> {{this.cantPelisVistas[0].totalRecaudado}}</div>    
            <div class="table--item"> {{this.cantPelisVistas[0].TotalCombo}}</div>    
            <div class="table--item"> {{(this.cantPelisVistas[0].cantPeli*this.$store.getters.precioPelicula)+this.cantPelisVistas[0].TotalCombo}}</div>  
            <div class="table--item"> <h3>El origen</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[1].cantPeli}}</div> 
            <div class="table--item"> {{this.cantPelisVistas[1].totalRecaudado}}</div>    
            <div class="table--item"> {{this.cantPelisVistas[1].TotalCombo}}</div>    
            <div class="table--item"> {{(this.cantPelisVistas[1].cantPeli*this.$store.getters.precioPelicula)+this.cantPelisVistas[1].TotalCombo}}</div> 
            <div class="table--item"> <h3>Star Wars: Episodio IX</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[2].cantPeli}}</div> 
            <div class="table--item"> {{this.cantPelisVistas[2].totalRecaudado}}</div>    
            <div class="table--item"> {{this.cantPelisVistas[2].TotalCombo}}</div>    
            <div class="table--item"> {{(this.cantPelisVistas[2].cantPeli*this.$store.getters.precioPelicula)+this.cantPelisVistas[2].TotalCombo}}</div>
            <div class="table--item"> <h3>Avatar</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[3].cantPeli}}</div> 
            <div class="table--item"> {{this.cantPelisVistas[3].totalRecaudado}}</div>    
            <div class="table--item"> {{this.cantPelisVistas[3].TotalCombo}}</div>    
            <div class="table--item"> {{(this.cantPelisVistas[3].cantPeli*this.$store.getters.precioPelicula)+this.cantPelisVistas[3].TotalCombo}}</div>
            <div class="table--item"> <h3>Jumanji</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[4].cantPeli}}</div> 
            <div class="table--item"> {{this.cantPelisVistas[4].totalRecaudado}}</div>    
            <div class="table--item"> {{this.cantPelisVistas[4].TotalCombo}}</div>    
            <div class="table--item"> {{(this.cantPelisVistas[4].cantPeli*this.$store.getters.precioPelicula)+this.cantPelisVistas[4].TotalCombo}}</div>
            <div class="table--item"> <h3>Rapidos y Furiosos</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[5].cantPeli}}</div> 
            <div class="table--item"> {{this.cantPelisVistas[5].totalRecaudado}}</div>    
            <div class="table--item"> {{this.cantPelisVistas[5].TotalCombo}}</div>    
            <div class="table--item"> {{(this.cantPelisVistas[5].cantPeli*this.$store.getters.precioPelicula)+this.cantPelisVistas[5].TotalCombo}}</div>
            <div class="table--item"> <h3>Guerra Mundial Z</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[6].cantPeli}}</div> 
            <div class="table--item"> {{this.cantPelisVistas[6].totalRecaudado}}</div>    
            <div class="table--item"> {{this.cantPelisVistas[6].TotalCombo}}</div>    
            <div class="table--item"> {{(this.cantPelisVistas[6].cantPeli*this.$store.getters.precioPelicula)+this.cantPelisVistas[6].TotalCombo}}</div>
            <div class="table--item"> <h3>Deadpool</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[7].cantPeli}}</div> 
            <div class="table--item"> {{this.cantPelisVistas[7].totalRecaudado}}</div>    
            <div class="table--item"> {{this.cantPelisVistas[7].TotalCombo}}</div>    
            <div class="table--item"> {{(this.cantPelisVistas[7].cantPeli*this.$store.getters.precioPelicula)+this.cantPelisVistas[7].TotalCombo}}</div> 
            <div class="table--item"> <h3>Jurassic World</h3> </div>  
            <div class="table--item"> {{this.cantPelisVistas[8].cantPeli}}</div> 
            <div class="table--item"> {{this.cantPelisVistas[8].totalRecaudado}}</div>    
            <div class="table--item"> {{this.cantPelisVistas[8].TotalCombo}}</div>    
            <div class="table--item"> {{(this.cantPelisVistas[8].cantPeli*this.$store.getters.precioPelicula)+this.cantPelisVistas[8].TotalCombo}}</div>  
            <div class="table--item total">Total</div>  
            <div class="table--item total">{{this.totalCant}}</div>               
            <div class="table--item total">{{this.totalRecaudado}}</div>  
            <div class="table--item total">{{this.totalSnacks}}</div>  
            <div class="table--item total">{{this.total}}</div>  
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
            cantPelisVistas: [{TotalCombo: 0,cantPeli:0,totalRecaudado :0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0},
            {TotalCombo: 0,cantPeli:0,totalRecaudado :0}],
            totalCant: 0,totalRecaudado :0,totalSnacks:0,total:0
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
                    this.cantPelisVistas[0].cantPeli++
                    this.cantPelisVistas[0].TotalCombo = this.cantPelisVistas[0].TotalCombo + this.reservas[i].TotalCombo
                    this.cantPelisVistas[0].totalRecaudado = this.cantPelisVistas[0].cantPeli*this.$store.getters.precioPelicula
                }     
                if (this.reservas[i].Pelicula == "El origen") {
                    this.cantPelisVistas[1].cantPeli++
                    this.cantPelisVistas[1].TotalCombo = this.cantPelisVistas[1].TotalCombo + this.reservas[i].TotalCombo
                    this.cantPelisVistas[1].totalRecaudado = this.cantPelisVistas[1].cantPeli*this.$store.getters.precioPelicula
                }  
                if (this.reservas[i].Pelicula == "Star Wars: Episodio IX") {
                    this.cantPelisVistas[2].cantPeli++
                    this.cantPelisVistas[2].TotalCombo = this.cantPelisVistas[2].TotalCombo + this.reservas[i].TotalCombo
                    this.cantPelisVistas[2].totalRecaudado = this.cantPelisVistas[2].cantPeli*this.$store.getters.precioPelicula
                }  
                if (this.reservas[i].Pelicula == "Avatar") {
                    this.cantPelisVistas[3].cantPeli++
                    this.cantPelisVistas[3].TotalCombo = this.cantPelisVistas[3].TotalCombo + this.reservas[i].TotalCombo
                    this.cantPelisVistas[3].totalRecaudado = this.cantPelisVistas[3].cantPeli*this.$store.getters.precioPelicula
                }  
                if (this.reservas[i].Pelicula == "Jumanji") {
                    this.cantPelisVistas[4].cantPeli++
                    this.cantPelisVistas[4].TotalCombo = this.cantPelisVistas[4].TotalCombo + this.reservas[i].TotalCombo
                    this.cantPelisVistas[4].totalRecaudado = this.cantPelisVistas[4].cantPeli*this.$store.getters.precioPelicula
                }  
                if (this.reservas[i].Pelicula == "Rapidos y Furiosos") {
                    this.cantPelisVistas[5].cantPeli++
                    this.cantPelisVistas[5].TotalCombo = this.cantPelisVistas[5].TotalCombo + this.reservas[i].TotalCombo
                    this.cantPelisVistas[5].totalRecaudado = this.cantPelisVistas[5].cantPeli*this.$store.getters.precioPelicula
                }  
                if (this.reservas[i].Pelicula == "Guerra Mundial Z") {
                    this.cantPelisVistas[6].cantPeli++
                    this.cantPelisVistas[6].TotalCombo = this.cantPelisVistas[6].TotalCombo + this.reservas[i].TotalCombo
                    this.cantPelisVistas[6].totalRecaudado = this.cantPelisVistas[6].cantPeli*this.$store.getters.precioPelicula
                }  
                if (this.reservas[i].Pelicula == "Deadpool") {
                    this.cantPelisVistas[7].cantPeli++
                    this.cantPelisVistas[7].TotalCombo = this.cantPelisVistas[7].TotalCombo + this.reservas[i].TotalCombo
                    this.cantPelisVistas[7].totalRecaudado = this.cantPelisVistas[7].cantPeli*this.$store.getters.precioPelicula
                }  
                if (this.reservas[i].Pelicula == "Jurassic World") {
                    this.cantPelisVistas[8].cantPeli++
                    this.cantPelisVistas[8].TotalCombo = this.cantPelisVistas[8].TotalCombo + this.reservas[i].TotalCombo 
                    this.cantPelisVistas[8].totalRecaudado = this.cantPelisVistas[8].cantPeli*this.$store.getters.precioPelicula                   
                }  
                this.totalCant = this.reservas.length 
            }  
        },
        totalRec() {
            for (let i = 0; i < this.cantPelisVistas.length; i++) { 
                this.totalRecaudado = this.totalRecaudado + this.cantPelisVistas[i].totalRecaudado  
                this.totalSnacks = this.totalSnacks + this.cantPelisVistas[i].TotalCombo   
                this.total = this.totalSnacks + this.totalRecaudado
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